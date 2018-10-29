import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships: Object;
  // results: [];

  constructor(private shipsService: ShipsService) { }

  showShips() {
    this.shipsService.getShips().subscribe(
      data => {
        console.log(data)
        this.ships = data
        console.log(this.ships)
        // this code logs the name
        // console.log(this.ships.results[0].name)
      }
    )
  }

  ngOnInit() {
  }

}
