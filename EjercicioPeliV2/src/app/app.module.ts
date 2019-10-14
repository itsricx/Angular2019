import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import {peliculasservicio} from './services/peliculas-servicio';
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontradaComponent,
    ListadoPeliculasComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    FlexLayoutModule,
    PaginaNoEncontradaComponent,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [peliculasservicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
