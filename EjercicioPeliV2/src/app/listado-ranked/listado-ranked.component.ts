import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula-interface';
import { peliculasservicio } from '../services/peliculas-servicio';

@Component({
  selector: 'app-listado-ranked',
  templateUrl: './listado-ranked.component.html',
  styleUrls: ['./listado-ranked.component.css']
})
export class ListadoRankedComponent implements OnInit {

  peliculasservicio: peliculasservicio;
  listadoRanked: Pelicula[];
  columnsToDisplay = ['id','overview','original_title','original_language','title','popularity','vote_average'];
  constructor() { 
  }

  ngOnInit() {
    this,this.cargarRanked;
    }
  
  
    cargarRanked() {
      this.peliculasservicio.getTopRanked().subscribe(resp =>{
  
        this.listadoRanked = resp.results;
      });

}
    
}
