import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    // You can write logic here.
    return !!window.localStorage.getItem('token');
  }
}
