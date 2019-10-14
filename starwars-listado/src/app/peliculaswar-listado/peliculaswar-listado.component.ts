import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import { peliculaswar } from '../models/interfaces/starwars.interface';
@Component({
  selector: 'app-peliculaswar-listado',
  templateUrl: './peliculaswar-listado.component.html',
  styleUrls: ['./peliculaswar-listado.component.css']
})



export class PeliculaswarListadoComponent implements OnInit {
  listadopeliculas: peliculaswar[];

 columnsToDisplay = ['title',
  'episode_id',
  'opening_crawl',
  'director',
  'producer',
  'release_date'];
  
  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.loadPlanets();
  }

  loadPlanets() {
    this.starwarsService.getPelis().subscribe(resp => {
      this.listadopeliculas = resp.peliculaswar;
    });
  }

}
