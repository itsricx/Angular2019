import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import {peliculasservicio} from './services/peliculas-servicio';
import { ListadoPopularesComponent } from './listado-populares/listado-populares.component';
import { ListadoRankedComponent } from './listado-ranked/listado-ranked.component';
import { ListadoRecientesComponent } from './listado-recientes/listado-recientes.component';
const appRoutes: Routes = [
  { path: 'recientes', component: ListadoRecientesComponent },
  { path: 'popular',      component: ListadoPopularesComponent },
  {
    path: 'top_ranked',
    component: ListadoRankedComponent
  },
  { path: '',
    redirectTo: 'popular',
    pathMatch: 'full'
  },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontradaComponent,
    ListadoPopularesComponent,
    ListadoRankedComponent,
    ListadoRecientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [peliculasservicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
