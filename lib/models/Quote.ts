import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const quoteSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            maxlength: 80,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            maxlength: 160,
            required: true,
        },
        projectType: {
            type: String,
            required: true,
            trim: true,
            enum: ["android-app", "ios-app", "web-app", "dashboard", "other"],
        },
        budget: {
            type: String,
            trim: true,
            enum: ["", "under-50k", "50k-2l", "2l-10l", "above-10l"],
            default: "",
        },
        details: {
            type: String,
            required: true,
            trim: true,
            maxlength: 2000,
        },
        consent: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export type QuoteDocument = InferSchemaType<typeof quoteSchema>;

export const Quote: Model<QuoteDocument> =
    (mongoose.models.Quote as Model<QuoteDocument>) ||
    mongoose.model<QuoteDocument>("Quote", quoteSchema);
