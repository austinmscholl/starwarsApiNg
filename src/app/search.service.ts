import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // searchUrl = 'https://swapi.co/api/people/?search=';

  constructor(private http: HttpClient) { }

  // getSearch () {
  //   console.log('getSearch() is called')
  //   console.log(searchText);
  //   return this.http.get(`https://swapi.co/api/people/?search=${searchText}`)
  // }

  // getSearch(searchText) {
  //   console.log('getSearch() is called')
  //   return this.http.get(`this.searchUrl${searchText}`)
  // }

  getSearch (input, select) {
    console.log('getSearch() is called')
    console.log(input, select);
    return this.http.get(`https://swapi.co/api/${select}/?search=${input}`)
  }

}
