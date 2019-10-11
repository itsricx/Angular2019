import {peliculaswar} from "./starwars.interface";

export interface starWarResponse {
    count: number;
    next?: string;
    previous?: any;
    peliculaswar: peliculaswar[];
}