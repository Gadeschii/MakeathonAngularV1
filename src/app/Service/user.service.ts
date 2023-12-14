// auth.service.ts
import { Injectable } from '@angular/core';
import { feathers } from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _feathers = feathers(); // Inicializar Feathers
  private _socket = io('http://localhost:3030'); // Inicializar el socket

  constructor() {
    this._feathers.configure(socketio(this._socket)); // Agregar el plugin de socket a Feathers
  }

  // Autenticar con el servidor Feathers
  login(email: string, password: string) {
    // return this._feathers.authenticate({
    //   strategy: 'local',
    //   email,
    //   password
    // });
  }
}