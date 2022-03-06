import { Injectable } from '@angular/core';
import { Inmobiliario } from '../interfaces/inmobiliarios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariosService {


 
  constructor( private http: HttpClient ) { }


  AllInmobiliarios: Inmobiliario[] = [];


  getInmobiliarios(): Observable<Inmobiliario[]>{
    return this.http.get<Inmobiliario[]>('http://localhost:3000/inmobiliarios');
  }

  agregaInmobiliario(inmobiliario: Inmobiliario){
    return this.http.post<Inmobiliario>('http://localhost:3000/inmobiliarios', inmobiliario);
  }
  

}
