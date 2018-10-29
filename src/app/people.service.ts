import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  peopleUrl = 'https://swapi.co/api/people'

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(this.peopleUrl);
  }
}
