import * as mongoose from 'mongoose';

export const AnalyticsSchema = new mongoose.Schema({
    url: String,
    rDuration: Number,
    method: String,
    status: String,
    extras: Object,
    createdAt: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
});
