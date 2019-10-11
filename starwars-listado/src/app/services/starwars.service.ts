import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { starWarResponse } from '../models/interfaces/starwar-response.interface';

const authURL = 'https://swapi.co/api/films/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  getPelis(): Observable<starWarResponse> {
    return this.http.get<starWarResponse>(
       authURL,
       requestOptions
    );
 }


}
