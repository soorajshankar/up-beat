import * as mongoose from 'mongoose';

export const NotifierSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});
