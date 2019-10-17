import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula-interface';
import { ActivatedRoute } from '@angular/router';
import { peliculasservicio } from '../services/peliculas-servicio';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {
  idpelicula: string;
  pelicula:Pelicula;
  constructor( 
    private route: ActivatedRoute,
    private peliculaServicio: peliculasservicio
  )

 { }

  ngOnInit() {
  this.route.paramMap.subscribe(params =>{
    this.idpelicula = params.get("idP");
  
    this.peliculaServicio.getPopulares(this.idpelicula).subscribe(resp =>{
      //this.pelicula = resp;
    });
  });
  
  }

}
