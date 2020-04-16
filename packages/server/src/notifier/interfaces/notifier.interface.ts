import { Document } from 'mongoose';

export interface Notifier extends Document {
    readonly type: string;
    readonly schedule: string;
    readonly active: boolean;
    readonly config: object;
}
