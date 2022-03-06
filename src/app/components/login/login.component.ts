import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  public ingresar() {

    if (this.form.value["password"] == "sis") {
      console.log("Acceso correcto...");
      this.loading = true;
      this.router.navigate(['dashboard/inmobiliarios']);
    } else {
      this.error();
      this.form.reset();
    }

  }

  private error() {
    this._snackBar.open("Error de acceso", '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }


}

