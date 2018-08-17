export interface Metadata {
    [key: string]: any;
}
export declare class Model {
    meta: Metadata;
    constructor(id: number | string);
    copyInto<T extends Model>(Type: new (id: number | string) => T): T;
}
