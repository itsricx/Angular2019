import { Component, OnInit } from '@angular/core';
import { PELICULAS } from '../models/mock-pelicula';
import { Pelicula } from '../models/pelicula.interface';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit {
  peliculas: Pelicula[] = PELICULAS;
  peliculaSeleccionada: Pelicula;

  constructor() { }

  ngOnInit() {
  }

  selectCiudad(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }

}
