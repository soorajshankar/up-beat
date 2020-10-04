import * as mongoose from 'mongoose';

export const NotifierSchema = new mongoose.Schema({
    type: String,
    schedule: String,
    status: String,
    config: String,
    createdAt: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
});
