import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {

  filmsUrl = 'https://swapi.co/api/films';

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get(this.filmsUrl);
  }
}
