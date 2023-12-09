import { Source } from "./ISources";
import { Inews } from "./Inews";

export interface InewsResponse {
    status?: string,
    totalResults?: number,
    articles: Inews[]
}

export interface ISourcesResponse {
    status?: string,
    sources: Source[]
}