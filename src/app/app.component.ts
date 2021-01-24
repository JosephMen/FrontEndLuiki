import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WebSocket';

  constructor(private WebSocketService: WebSocketService) {

  }
  ngOnInit() {
    // this.WebSocketService.listen('test event').subscribe((data)=>{
    //   console.log(data)
    // })
  }
}
