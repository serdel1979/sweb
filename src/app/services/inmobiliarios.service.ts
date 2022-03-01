import { Injectable } from '@angular/core';
import { Inmobiliario } from '../interfaces/inmobiliarios';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariosService {


  listInmobiliarios: Inmobiliario[] = [
    {nombre: 'Abril', tipo: 'Barrio cerrado', titulares: 4, estado: 'Confirmado', idCou: 'a31', idMae: '45'},
    {nombre: 'Grand Bell', tipo: 'Barrio cerrado', titulares: 3, estado: 'Confirmado', idCou: 'a32', idMae: '46'},
    {nombre: 'Los Ceibos', tipo: 'Barrio cerrado', titulares: 2, estado: 'Confirmado', idCou: 'a3', idMae: '21'},
    {nombre: 'Los Naranjos', tipo: 'Barrio cerrado', titulares: 5, estado: 'No Confirmado', idCou: 'a33', idMae: ''},
    {nombre: 'Montañas', tipo: 'Club de chacra', titulares: 3, estado: 'En Seguimiento', idCou: 'a34', idMae: '11'},
    {nombre: 'Verdin', tipo: 'Club de campo', titulares: 2, estado: 'Descartado', idCou: 'a35', idMae: '12'},
    {nombre: 'Ayacucho', tipo: 'Urbano', titulares: 1, estado: 'En Seguimiento', idCou: 'a36', idMae: '87'},
    {nombre: 'Los Milaneses', tipo: 'Urbano', titulares: 2, estado: 'No Confirmado', idCou: 'a37', idMae: '88'},
    {nombre: 'Campo Roca', tipo: 'Barrio cerrado', titulares: 3, estado: 'No Confirmado', idCou: 'a38', idMae: '99'},
    {nombre: 'Guaymallén', tipo: 'Urbano', titulares: 7, estado: 'Confirmado', idCou: 'a39', idMae: '66'},
  ];

  constructor() { }

  getConjuntosInmobiliarios(){
      return this.listInmobiliarios.slice();
  }

  eliminarInmo(index: number){
    //console.log(index);
    this.listInmobiliarios.splice(index,1)
  }
}
