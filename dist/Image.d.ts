import { Model } from './Model';
interface ISrcset {
    url: string;
    size: [string, number];
}
export declare class Image extends Model {
    title: string;
    name: string;
    main_url: string;
    width: number;
    height: number;
    srcset: ISrcset[];
    constructor(id: number | string);
    addSource(src: ISrcset): Image;
}
export {};
