import { Component, OnInit } from '@angular/core';
import {Alumno} from './alumno.interface';

const ALUMNOS: Alumno[] = [
  {nombre: 'Miguel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Pepe', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Juan', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Esperanza', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Manuel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Manuel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Manuel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Manuel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Manuel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Manuel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Manuel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Manuel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'Manuel', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018},
  {nombre: 'María', clase: '1 DAM', notaMedia: 10, anyoMatricula: 2018}
]; 

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.css']
})
export class AlumnosListadoComponent implements OnInit {
  titulo: string = 'Alumnos';
  columnasMostrar: string[] = ['colNombre', 'colClase', 'colNotaMedia', 'colAcciones'];
  listadoAlumnos = ALUMNOS;

  constructor() { }

  ngOnInit() {
  }

}
