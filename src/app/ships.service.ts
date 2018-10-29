import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShipsService {

  shipsUrl = 'http://swapi.co/api/starships'

  constructor(private http: HttpClient) { }

  getShips() {
    return this.http.get(this.shipsUrl);
  }
}
