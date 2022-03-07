import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InmobiliariosService } from 'src/app/services/inmobiliarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-crear-inmobiliario',
  templateUrl: './crear-inmobiliario.component.html',
  styleUrls: ['./crear-inmobiliario.component.css']
})


export class CrearInmobiliarioComponent implements OnInit {

  public form: FormGroup;

  public inmobiliario: any;


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


  constructor(private fb: FormBuilder, private router: Router, private service: InmobiliariosService, private activate: ActivatedRoute) {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      titulares: ['', Validators.required],
      estado: ['', Validators.required],
      idCou: ['', Validators.required],
      idMae: ['', Validators.required],
      subestado: ['', Validators.required],
      expediente: ['', Validators.required],
      acta: ['', Validators.required],
      num_admin: ['', Validators.required],
      fecha: ['', Validators.required],
    })

  }


  goBack() {
    this.router.navigate(['dashboard/inmobiliarios']);
  }

  public guardar() {
    this.service.agregaInmobiliario(this.form.value)
      .subscribe(data => {
        console.log(this.form.value);
        this.goBack();
      })
  }


 


  ngOnInit(): void {
  }




}
