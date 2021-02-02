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
                  height: 15,
                  width: 15,
                  posx:617,
                  posy:401}

  public carro2 = {name:"Junior",
  height: 15,
  width: 15,
  posx: 637,
  posy: 401}
                  
  public raceTracks = {
                      easy : new RaceTrack().easy,
                      medium : new RaceTrack().medium,
                      hard : new RaceTrack().hard
                    };

  public lastDirection1 = {x:617,y:401};
  public lastDirection2 = {x:637,y:401};

  constructor(private webSocket:WebSocketService) { }

  @HostListener('document:keydown.Shift', ['$event']) acelerar(event: KeyboardEvent){
    this.moverCarro();
  }

  @HostListener('document:keydown.ArrowUp', ['$event']) acelerar2(event: KeyboardEvent){
    this.girarCarro({x:0,y:-1})
  }

  @HostListener('document:keydown.Shift.ArrowUp', ['$event']) acelerarArriba(event: KeyboardEvent){
    this.girarCarro({x:0,y:-1});
    this.moverCarro();
  }

  @HostListener('document:keydown.ArrowRight', ['$event']) girarDerecha(event: KeyboardEvent){
    this.girarCarro({x:1,y:0}) ;
  }

  @HostListener('document:keydown.Shift.ArrowRight', ['$event']) acelerarGirarDerecha(event: KeyboardEvent){
    this.girarCarro({x:1,y:0});
    this.moverCarro();
  }

  @HostListener('document:keydown.ArrowLeft', ['$event']) girarIzquierda(event: KeyboardEvent){
    this.girarCarro({x:-1,y:0});  
  }

  @HostListener('document:keydown.Shift.ArrowLeft', ['$event']) acelerarGirarIzquierda(event: KeyboardEvent){
    this.girarCarro({x:-1,y:0});  
    this.moverCarro();
  }

  @HostListener('document:keydown.ArrowDown', ['$event']) retroceder(event: KeyboardEvent){
    this.girarCarro({x:0,y:1});
  }

  @HostListener('document:keydown.Shift.ArrowDown', ['$event']) acelerarRetroceder(event: KeyboardEvent){
    this.girarCarro({x:0,y:1});
    this.moverCarro();
  }

  @HostListener('document:keydown.Space', ['$event']) salvar(event: KeyboardEvent){
    this.webSocket.emit('save', 1);
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

    this.ctx3.fillRect(this.carro2.posx,this.carro2.posy,this.carro2.width,this.carro2.height)

    
    this.webSocket.listen("move").subscribe((data:any) =>{
        console.log(data);

        this.ctx3.clearRect(this.lastDirection1.x,this.lastDirection1.y, this.carro.width, this.carro.height);
        this.ctx3.fillRect(data.posx,data.posy,this.carro.width, this.carro.height);
        this.lastDirection1.x = data.posx;
        this.lastDirection1.y = data.posy;          

      });

      this.webSocket.listen("save").subscribe((data:any) => {
        console.log(data);
      });

      this.webSocket.listen("pto").subscribe((data:any) => {
        console.log(data);
      });

    }

  moveCar(evt:KeyboardEvent){
    console.log(evt)
  }


  moverCarro(){
    this.webSocket.emit('move', 1);
  }

  girarCarro(dato){
    this.webSocket.emit('turn',dato)
  }

  

}
