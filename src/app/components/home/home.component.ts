import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WebSocketService } from '../../services/web-socket.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nickname = new FormControl();

  constructor(
    private webSocketService: WebSocketService
  ) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.nickname.value);
    this.webSocketService.emit('nickname: ', this.nickname.value);
  }


}
