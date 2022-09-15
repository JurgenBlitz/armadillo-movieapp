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

  public testCall(){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.callUrl}/users/test`, {responseType: 'text'}).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }
}
