import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  createMatch() {

  }

  joinMatch() {
    this.route.navigate(['joinMatch'])
  }

  createRoom(){
    this.route.navigate(['raceMaker'])
  }

  seeStats() {

  }

}
