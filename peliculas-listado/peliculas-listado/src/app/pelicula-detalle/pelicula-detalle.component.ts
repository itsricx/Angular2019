import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../models/pelicula.interface';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {
  @Input() pelicula: Pelicula;
  constructor() { }

  ngOnInit() {
  }

}
