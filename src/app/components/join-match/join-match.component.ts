import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service'

@Component({
  selector: 'app-join-match',
  templateUrl: './join-match.component.html',
  styleUrls: ['./join-match.component.css']
})
export class JoinMatchComponent implements OnInit, AfterViewInit {

  //Esto es una referencia a mi canva
  @ViewChild("miCanva1") miCanva1 : ElementRef<HTMLCanvasElement>;
  public ctx1 : CanvasRenderingContext2D
  public cuadrado: any

  @ViewChild("miCanva2") miCanva2 : ElementRef<HTMLCanvasElement>;
  public ctx2 : CanvasRenderingContext2D
  public cuadrado1: any

  @ViewChild("miCanva3") miCanva3 : ElementRef<HTMLCanvasElement>;
  public ctx3 : CanvasRenderingContext2D
  public cuadrado2: any

  public salas : any

// Metodos del componente

  constructor(
    private webSocketService: WebSocketService
    ) { }

  ngOnInit(): void {
    

  }
  ngAfterViewInit(){
    this.webSocketService.emit('init', 1)
    this.ctx1 = this.miCanva1.nativeElement.getContext('2d')
    this.ctx2 = this.miCanva2.nativeElement.getContext('2d')
    this.ctx3 = this.miCanva3.nativeElement.getContext('2d')

    this.webSocketService.listen('pocisiones').subscribe((data:any) => {

      let height = this.miCanva1.nativeElement.height
      let width = this.miCanva2.nativeElement.width

      this.ctx1.clearRect(0,0, width, height)
      this.ctx2.clearRect(0,0, width, height)
      this.ctx3.clearRect(0,0, width, height)

      this.ctx1.fillStyle = 'red';  
      this.ctx2.fillStyle = 'red';  
      this.ctx3.fillStyle = 'red';  

      this.ctx1.fillRect(data.posx1, data.posy1, 50, 50)
      console.log(data.posx1, data.posy1)

      this.ctx2.fillRect(data.posx2, data.posy2, 50, 50)
      console.log(data.posx2, data.posy2)

      this.ctx3.fillRect(data.posx3, data.posy3, 50, 50)
      console.log(data.posx3, data.posy3)

    })

  }

  mover(datos){
    this.webSocketService.emit('move', datos)
  }


}
