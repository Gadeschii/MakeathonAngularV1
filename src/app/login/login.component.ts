// login.component.ts
import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupUser: any = {};
  signupObj: any = {};

  email!: string;
  password!: string; 

  loginObj: any = {
    email: '',
    password: ''
  };
  

  constructor(private userService: UserService) {}

  login() {
    // this.userService.login(this.email, this.password)
    //   .then(() => {
    //     // Redirigir al usuario a la página principal después de iniciar sesión
    //   })
      // .catch(err => {
      //   // Manejar errores de inicio de sesión
      // });
  }
}

