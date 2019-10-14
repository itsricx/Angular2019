import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculasResponse } from '../models/pelicula-response';

const authURL = 'https://swapi.co/api/films?api_key = ' + apiKey;
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

  getPeliculas(): Observable<PeliculasResponse>{
    return this.http.get<PeliculasResponse>(

        authURL,
        requestOptions
    );

  }  
}
