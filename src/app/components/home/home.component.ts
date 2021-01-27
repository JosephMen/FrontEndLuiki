import { ViewChild, Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { WebSocketService } from '../../services/web-socket.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public nickname = new FormControl('', Validators.required);

  constructor(
    private webSocketService: WebSocketService,
    private route: Router
  ) { }

  ngOnInit(): void {

  }

  save() {
    console.log(this.nickname.value);
    this.webSocketService.emit('nickname: ', this.nickname.value);
    this.route.navigate(['menu'])
  }


}
