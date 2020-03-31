import { Document } from 'mongoose';
import { Analytics } from './analytics.interface';

export interface Test {
    url?: string;
    analytics?: Analytics[];
}
