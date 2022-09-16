import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private callUrl = environment.endpoint;

  constructor(
    private http: HttpClient
  ) { }

  public loginUser(user) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.callUrl}/users/login`, user, {responseType: 'json'}).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      })
    })
  }

  public signupUser(user) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.callUrl}/users/signup`, user, {responseType: 'json'}).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      })
    })
  }
}
