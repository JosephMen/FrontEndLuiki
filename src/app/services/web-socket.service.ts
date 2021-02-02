import { Injectable } from '@angular/core';
import { io } from 'socket.io-client'
import {Observable, Subscriber} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;
  server = "192.168.0.11"

  constructor() { 
    this.socket = io(this.server)
    this.socket.emit('my message', 'Hello there from Angular.');
    this.socket.on('my broadcast', (data: string) => {
      console.log(data);
    });
  }

  listen(eventName : String){
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data) => {
        Subscriber.next(data)
      })
    })
  }

  emit(eventName:String, data : any ){
    this.socket.emit(eventName, data);
  }

}
