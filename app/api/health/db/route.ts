import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";

const HEALTH_TIMEOUT_MS = 8000;

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, errorMessage: string) {
    return Promise.race<T>([
        promise,
        new Promise<T>((_, reject) => {
            setTimeout(() => reject(new Error(errorMessage)), timeoutMs);
        }),
    ]);
}

export async function GET() {
    const startedAt = Date.now();

    try {
        await withTimeout(
            connectToDatabase(),
            HEALTH_TIMEOUT_MS,
            "Database health check timed out"
        );

        return NextResponse.json({
            ok: true,
            latencyMs: Date.now() - startedAt,
            hasMongoUri: Boolean(process.env.MONGODB_URI),
            dbName: process.env.MONGODB_DB_NAME || "portfolio",
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Database health check failed";

        return NextResponse.json(
            {
                ok: false,
                latencyMs: Date.now() - startedAt,
                hasMongoUri: Boolean(process.env.MONGODB_URI),
                dbName: process.env.MONGODB_DB_NAME || "portfolio",
                error: message,
                timestamp: new Date().toISOString(),
            },
            { status: 503 }
        );
    }
}
