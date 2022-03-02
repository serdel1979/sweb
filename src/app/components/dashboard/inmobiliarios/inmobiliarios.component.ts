import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, TextOnlySnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inmobiliario } from 'src/app/interfaces/inmobiliarios';
import { InmobiliariosService } from 'src/app/services/inmobiliarios.service';
import { finalize } from 'rxjs/operators';




@Component({
  selector: 'app-inmobiliarios',
  templateUrl: './inmobiliarios.component.html',
  styleUrls: ['./inmobiliarios.component.css']
})
export class InmobiliariosComponent implements OnInit {

  //listInmobiliarios: Inmobiliario[] = [];


  listInmobiliarios: any;

  displayedColumns: string[] = ['nombre', 'tipo', 'titulares', 'estado', 'idCou', 'idMae', 'Acciones'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _inmobiliariosServices: InmobiliariosService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarInmobiliarios();
  }




  cargarInmobiliarios() {
   // this.listInmobiliarios = this._inmobiliariosServices.getConjuntosInmobiliarios();
    this.listInmobiliarios = this._inmobiliariosServices.getInmobiliarios();
    console.log("despues de llamada al api ",this.listInmobiliarios);
    this.dataSource = new MatTableDataSource(this.listInmobiliarios);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarInmo(index: number) {
    //console.log(index);
    this._inmobiliariosServices.eliminarInmo(index);
    this.cargarInmobiliarios();


    this._snackBar.open("Registro eliminado", '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }


}
