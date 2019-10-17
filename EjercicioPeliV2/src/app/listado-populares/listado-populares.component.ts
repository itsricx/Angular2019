import { Component, OnInit } from '@angular/core';
import { peliculasservicio } from '../services/peliculas-servicio';
import { Pelicula } from '../models/pelicula-interface';

@Component({
  selector: 'app-listado-populares',
  templateUrl: './listado-populares.component.html',
  styleUrls: ['./listado-populares.component.css']
})
export class ListadoPopularesComponent implements OnInit {

  
  listadoPopulares: Pelicula[];
  columnsToDisplay = ['id','overview','original_title','original_language','title','popularity','vote_average'];
  constructor(private peliculasservicio: peliculasservicio) { 
  }

  ngOnInit() {
    this.cargarPopulares;
    }
  
  
    cargarPopulares() {
      this.peliculasservicio.getPopulares().subscribe(resp =>{
  
        this.listadoPopulares = resp.results;
      });

}

}
