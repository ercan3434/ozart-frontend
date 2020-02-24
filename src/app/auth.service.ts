import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl,private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this.apiUrl+"/register", user)
  }

  loginUser(user) {
    return this.http.post<any>(this.apiUrl+"/login", user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/products'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
