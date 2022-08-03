import { Injectable } from '@angular/core';
import { Server } from 'socket.io';
import { io, Socket } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket{
// please note that the types are reversed

public io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>();
public socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
  constructor() {
    
  }

  Conexion()
  {
    this.io.on("connection", (socket) => {
    

      });
  }
}
