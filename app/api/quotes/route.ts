import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Quote } from "@/lib/models/Quote";

export const runtime = "nodejs";

const DB_TIMEOUT_MS = 8500;

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, errorMessage: string) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const timeoutPromise = new Promise<T>((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error(errorMessage)), timeoutMs);
    });

    return Promise.race<T>([promise, timeoutPromise]).finally(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    });
}

function validateQuotePayload(payload: unknown) {
    if (!payload || typeof payload !== "object") {
        return "Invalid request payload.";
    }

    const { fullName, email, projectType, budget, details, consent } = payload as {
        fullName?: string;
        email?: string;
        projectType?: string;
        budget?: string;
        details?: string;
        consent?: boolean;
    };

    if (!fullName || fullName.trim().length < 2) {
        return "Please provide your name.";
    }

    if (fullName.trim().length > 80) {
        return "Name is too long.";
    }

    if (!email || email.trim().length === 0) {
        return "Please provide your email address.";
    }

    const basicEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!basicEmailRegex.test(email.trim())) {
        return "Please provide a valid email address.";
    }

    if (email.trim().length > 160) {
        return "Email is too long.";
    }

    const projectTypes = ["android-app", "ios-app", "web-app", "dashboard", "other"];

    if (!projectType || !projectTypes.includes(projectType)) {
        return "Please select a valid project type.";
    }

    const budgetOptions = ["", "under-50k", "50k-2l", "2l-10l", "above-10l"];

    if (typeof budget === "string" && !budgetOptions.includes(budget)) {
        return "Please select a valid budget option.";
    }

    if (!details || details.trim().length < 10) {
        return "Please provide meaningful project details.";
    }

    if (details.trim().length > 2000) {
        return "Project details are too long.";
    }

    if (!consent) {
        return "Consent is required before submission.";
    }

    return null;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validationError = validateQuotePayload(body);

        if (validationError) {
            return NextResponse.json({ error: validationError }, { status: 400 });
        }

        const { fullName, email, projectType, budget, details, consent } = body as {
            fullName: string;
            email: string;
            projectType: "android-app" | "ios-app" | "web-app" | "dashboard" | "other";
            budget?: "" | "under-50k" | "50k-2l" | "2l-10l" | "above-10l";
            details: string;
            consent: boolean;
        };

        await withTimeout(
            (async () => {
                await connectToDatabase();

                await Quote.create({
                    fullName: fullName.trim(),
                    email: email.trim(),
                    projectType,
                    budget: budget ?? "",
                    details: details.trim(),
                    consent,
                });
            })(),
            DB_TIMEOUT_MS,
            "Database operation timed out"
        );

        return NextResponse.json(
            { message: "Quote submitted successfully." },
            { status: 201 }
        );
    } catch (error) {
        console.error("Quote submission failed", error);

        if (error instanceof Error && error.message.toLowerCase().includes("timed out")) {
            return NextResponse.json(
                { error: "Database is taking too long to respond. Please try again." },
                { status: 504 }
            );
        }

        return NextResponse.json(
            { error: "Unable to submit quote right now. Please try again." },
            { status: 500 }
        );
    }
}
