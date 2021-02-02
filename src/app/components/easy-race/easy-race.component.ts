import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RaceTrack } from 'src/app/models/race-track/race-track.model';
import { Car } from 'src/app/models/car/car.model'
import { WebSocketService } from 'src/app/services/web-socket.service'

@Component({
  selector: 'app-easy-race',
  templateUrl: './easy-race.component.html',
  styleUrls: ['./easy-race.component.css']
})
export class EasyRaceComponent implements OnInit, AfterViewInit {

  @ViewChild("miCanva3") miCanva3 : ElementRef<HTMLCanvasElement>;
  public ctx3 : CanvasRenderingContext2D;
  public cuadrado2: any;

  public carro = {name:"Junior",
                  height: 20,
                  width: 20,
                  posx:600,
                  posy:600}
                  
  public raceTracks = {
                      easy : new RaceTrack().easy,
                      medium : new RaceTrack().medium,
                      hard : new RaceTrack().hard
                    };


  constructor(private webSocket:WebSocketService) { }

  @HostListener('document:keydown.Shift', ['$event']) acelerar(event: KeyboardEvent){
    console.log(this.carro)
    this.ctx3.clearRect(this.carro.posx,this.carro.posy, 20, 20);
    this.carro.posy -=15;
    this.ctx3.fillRect(this.carro.posx,this.carro.posy,this.carro.width,this.carro.height);
    this.moverCarro();
  }

  @HostListener('document:keydown.ArrowUp', ['$event']) acelerar2(event: KeyboardEvent){
    console.log(this.carro)
    this.ctx3.clearRect(this.carro.posx,this.carro.posy, 20, 20);
    this.carro.posy -=15;
    this.ctx3.fillRect(this.carro.posx,this.carro.posy,this.carro.width,this.carro.height)   
  }

  @HostListener('document:keydown.ArrowRight', ['$event']) girarDerecha(event: KeyboardEvent){
    console.log(this.carro)
    this.ctx3.clearRect(this.carro.posx,this.carro.posy, 20, 20);
    this.carro.posx +=15;
    this.ctx3.fillRect(this.carro.posx,this.carro.posy,this.carro.width,this.carro.height)   
  }

  @HostListener('document:keydown.ArrowLeft', ['$event']) girarIzquierda(event: KeyboardEvent){
    console.log(this.carro)
    this.ctx3.clearRect(this.carro.posx,this.carro.posy, 20, 20);
    this.carro.posx -=15;
    this.ctx3.fillRect(this.carro.posx,this.carro.posy,this.carro.width,this.carro.height)   
  }

  @HostListener('document:keydown.ArrowDown', ['$event']) retroceder(event: KeyboardEvent){
    console.log(this.carro)
    this.ctx3.clearRect(this.carro.posx,this.carro.posy, 20, 20);
    this.carro.posy +=15;
    this.ctx3.fillRect(this.carro.posx,this.carro.posy,this.carro.width,this.carro.height)   
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.ctx3 = this.miCanva3.nativeElement.getContext('2d')

    let height = this.miCanva3.nativeElement.height
    let width = this.miCanva3.nativeElement.width
    
    this.ctx3.clearRect(0,0, width, height)

    let image = new Image();

    this.ctx3.lineWidth = 3;
    this.ctx3.lineCap = 'round';
    this.ctx3.strokeStyle = '#000';

    this.ctx3.fillRect(this.carro.posx,this.carro.posy,this.carro.width,this.carro.height)
    
    this.webSocket.listen("movimiento").subscribe(
      data =>{
        console.log(data);
      });
    };

  moveCar(evt:KeyboardEvent){
    console.log(evt)
  }

  moverCarro(){
    this.webSocket.emit('movimiento','a');
  }

  

}
