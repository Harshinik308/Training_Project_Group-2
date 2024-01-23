import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  token=Math.random();
  login(){
    sessionStorage.setItem("Login TOKEN",this.token.toLocaleString());
  }
  logout(){
    sessionStorage.removeItem('Login TOKEN');
  }
}
