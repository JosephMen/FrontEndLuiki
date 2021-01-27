import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';


@Component({
  selector: 'app-race-maker',
  templateUrl: './race-maker.component.html',
  styleUrls: ['./race-maker.component.css']
})
export class RaceMakerComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

}
