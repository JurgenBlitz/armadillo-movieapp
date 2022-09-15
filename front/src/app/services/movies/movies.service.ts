import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private callUrl = environment.endpoint;

  constructor(
    private http: HttpClient
  ) { }

  public getMoviesList() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.callUrl}/movies/list`, { responseType: 'json' }).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  public getPopularMoviesList() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.callUrl}/movies/popular`, { responseType: 'json' }).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  public getMovieDetails(movieId: string) {
    return new Promise((resolve, reject) => {
    this.http.get(`${this.callUrl}/movies/details/${movieId}`, { responseType: 'json' }).subscribe((result) => {
      resolve(result);
    }, (error) => {
      reject(error);
    });
  });
  }
}
