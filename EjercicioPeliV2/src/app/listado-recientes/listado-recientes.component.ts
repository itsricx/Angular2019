import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula-interface';
import { peliculasservicio } from '../services/peliculas-servicio';
@Component({
  selector: 'app-listado-recientes',
  templateUrl: './listado-recientes.component.html',
  styleUrls: ['./listado-recientes.component.css']
})
export class ListadoRecientesComponent implements OnInit {
  peliculasservicio: peliculasservicio;
  listadoRecientes: Pelicula[];
  columnsToDisplay = ['id','overview','original_title','original_language','title','popularity','vote_average'];
  constructor() { 
  }

  ngOnInit() {
  this,this.cargarRecientes;
  }


  cargarRecientes() {
    this.peliculasservicio.getLatest().subscribe(resp =>{

      this.listadoRecientes = resp.results;
    });
    
    
  }
}
