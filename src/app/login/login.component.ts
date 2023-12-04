// login.component.ts
import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private userService: UserService) {}

  login() {
    this.userService.login(this.email, this.password)
      .then(() => {
        // Redirigir al usuario a la página principal después de iniciar sesión
      })
      .catch(err => {
        // Manejar errores de inicio de sesión
      });
  }
}