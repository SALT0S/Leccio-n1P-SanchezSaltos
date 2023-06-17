import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnosService } from '../alumnos.service';

interface Alumno {
  nombre: string;
  apellido: string;
  email: string;
  fechaNacimiento: string;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumnos: Alumno[] = [];
  nuevoAlumno: Alumno = {
    nombre: '',
    apellido: '',
    email: '',
    fechaNacimiento: ''
  };
  dataSource: MatTableDataSource<Alumno>; // Nueva propiedad para el origen de datos

  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'email',
    'fechaNacimiento'
  ];

  constructor(private alumnosService: AlumnosService) {
    this.alumnos = this.alumnosService.getAlumnos();
    this.dataSource = new MatTableDataSource<Alumno>(this.alumnos); // Inicializar el origen de datos
  }

  agregarAlumno() {
    this.alumnosService.agregarAlumno({ ...this.nuevoAlumno });
    this.alumnos = this.alumnosService.getAlumnos();
    this.dataSource.data = this.alumnos; // Actualizar los datos del origen de datos

    this.nuevoAlumno = {
      nombre: '',
      apellido: '',
      email: '',
      fechaNacimiento: ''
    };
  }
}
