import { Isource } from "./Isource"

export interface Inews {
    source?: Isource,
    author?: string,
    title?: string,
    description?: string,
    url?: string,
    urlToImage?: string,
    publishedAt?: string,
    content?: string
}