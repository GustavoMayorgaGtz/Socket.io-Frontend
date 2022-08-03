import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket{
// please note that the types are reversed

//public io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>();

  constructor() {
    super({
      url: "http://localhost:3000"
  });
  }

  Conexion()
  {
   /* this.io.on("connection", (socket) => {
    

      });*/
  }
}
