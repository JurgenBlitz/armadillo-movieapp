import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private callUrl = environment.endpoint;
  public loggedUser: any;
  constructor(
    private http: HttpClient
  ) {
    this.loggedUser = null;
  }

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

  public setLoggedUser(userEmail: string) {
    this.loggedUser = userEmail;
  }

  public getLoggedUser() {
    return this.loggedUser;
  }

  public deleteLoggedUser() {
    this.loggedUser = null;
  }
}
