import { Pelicula } from './pelicula-interface';

export interface PeliculasResponse {
    page: number;
    results: Pelicula[];
    total_results: number;
    total_pages: number;
}