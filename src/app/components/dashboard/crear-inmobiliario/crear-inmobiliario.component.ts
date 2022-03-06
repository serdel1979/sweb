import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-inmobiliario',
  templateUrl: './crear-inmobiliario.component.html',
  styleUrls: ['./crear-inmobiliario.component.css']
})
export class CrearInmobiliarioComponent implements OnInit {


  calificaciones = [
    { value: 'clubCampo', viewValue: 'Club de campo' },
    { value: 'cerrado', viewValue: 'Barrio cerrado' },
    { value: 'chacra', viewValue: 'Club de chacra' },
    { value: 'urbano', viewValue: 'Urbano' },
  ];
  selected = '';
  estado = [
    { value: 'enValores', viewValue: 'Asignación de valores' },
    { value: 'enActoAdmin', viewValue: 'Acto administrativo' },
    { value: 'enAnalisis', viewValue: 'Análisis' },
    { value: 'enSeguimiento', viewValue: 'Seguimiento' },
    { value: 'descartado', viewValue: 'Descartado' }
  ]
  selectedEstado = ""

  constructor(private router: Router) { }


  goBack() {
    this.router.navigate(['dashboard/inmobiliarios']);
  }


  ngOnInit(): void {
  }
}
