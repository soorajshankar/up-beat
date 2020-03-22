import { Document } from 'mongoose';

export interface Url extends Document {
    readonly url: string;
    readonly method: string;
    readonly createdAt?: Date;
    readonly active?: boolean;
}
