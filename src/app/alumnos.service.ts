import { Injectable } from '@angular/core';

interface Alumno {
  nombre: string;
  apellido: string;
  email: string;
  fechaNacimiento: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [];

  constructor() {}

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push({ ...alumno });
  }

  getAlumnos() {
    return this.alumnos;
  }
}
