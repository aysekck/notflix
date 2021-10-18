import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movieOwner';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  uri = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}
  saveMovie(movie: Movie) {
    return this.http.post(this.uri + '/movie', movie);
  }
}
