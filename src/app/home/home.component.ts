import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchService } from '../search.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchResults: Object;
  starWarsForm: FormGroup;

  constructor(private searchService: SearchService, private fb: FormBuilder) { }

  // searchText = '';

  dropdownValue : '';


  ngOnInit() {
    this.starWarsForm = this.fb.group({
      selectValue: new FormControl(),
      inputValue: new FormControl()
    })
  }

  // onSelectedValue(event) {
  //   console.log(event.target.value)
  //   this.dropdownValue = event.target.value;

  // }

  onSearchSubmit() {
    console.log(this.starWarsForm.value.inputValue)
    this.searchService.getSearch(this.starWarsForm.value.inputValue, this.starWarsForm.value.selectValue).subscribe(data => {
      console.log(data)
      this.searchResults = data
    })
  }

}
