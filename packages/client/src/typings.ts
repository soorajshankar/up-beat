export interface IUrl {
    readonly id: string;
    readonly url: string;
    readonly method: string;
    readonly createdAt?: Date;
    readonly active?: boolean;
}

export interface IOverviewDTO {
    type: string;
    value: number;
    prev: number;
}
