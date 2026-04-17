import mongoose from "mongoose";

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

declare global {
    var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || {
    conn: null,
    promise: null,
};

global.mongooseCache = cached;

export async function connectToDatabase() {
    const mongoUri = process.env.MONGODB_URI;
    const dbName = process.env.MONGODB_DB_NAME || "portfolio";

    if (!mongoUri) {
        throw new Error("MONGODB_URI is not configured.");
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(mongoUri, {
            dbName,
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
            socketTimeoutMS: 8000,
            family: 4,
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}
