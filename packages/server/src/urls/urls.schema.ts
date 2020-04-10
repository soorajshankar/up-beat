import * as mongoose from 'mongoose';

export const UrlsSchema = new mongoose.Schema({
    url: String,
    method: String,
    createdAt: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
});
