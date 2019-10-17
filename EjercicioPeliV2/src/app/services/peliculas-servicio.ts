import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculasResponse } from '../models/pelicula-response';

const apiKey = '?api_key=d684b65ec3d30071ad75e327100054ab';
const popular = 'https://api.themoviedb.org/3/movie/popular'+apiKey;
const topRated = 'https://api.themoviedb.org/3/movie/top_rated' +apiKey;
const latest = 'https://api.themoviedb.org/3/movie/latest' +apiKey;

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class peliculasservicio {

  constructor(private http: HttpClient) {

  }

  getLatest(): Observable<PeliculasResponse>{
    return this.http.get<PeliculasResponse>(

        latest,
        requestOptions
    );
     
}

getPopulares(idpelicula:string): Observable<PeliculasResponse>{
  return this.http.get<PeliculasResponse>(

      popular +idpelicula,
      requestOptions
  );  


  }

  getTopRanked(): Observable<PeliculasResponse>{
    return this.http.get<PeliculasResponse>(
  
        topRated,
        requestOptions
    );  
  
  
    }




} 
