import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/Services/socket.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  constructor(private socket: SocketService) { }

  ngOnInit(): void {
    this.socket.Conexion();
  }

}
