import * as mongoose from 'mongoose';

export const AnalyticsSchema = new mongoose.Schema({
    url: String,
    method: String,
    status: String,
    extras: Object,
    createdAt: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
});
