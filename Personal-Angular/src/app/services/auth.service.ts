import { Injectable } from '@angular/core';
import {Http,  Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  isProd: boolean;

  constructor(private http: Http) {
    this.isProd = false
  }

  getEndpoint(ep){
    if(this.isProd){
      return ep
    }
    else {
      return 'http://localhost:8080/'+ep
    }
  };

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let endPoint = this.getEndpoint('users/register');
    return this.http.post(endPoint, user, {headers: headers}).map(res => res.json())
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let endPoint = this.getEndpoint('users/authentication');
    return this.http.post(endPoint, user, {headers: headers}).map(res => res.json())
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    let endPoint = this.getEndpoint('users/profile');
    return this.http.get(endPoint,{headers: headers}).map(res => res.json())
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}