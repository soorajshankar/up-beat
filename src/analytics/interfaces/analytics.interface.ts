import { Document } from 'mongoose';

export interface Analytics extends Document {
    readonly url: string;
    readonly method: string;
    readonly status: string;
    readonly extras: object;
    readonly createdAt?: Date;
    readonly active?: boolean;
}
