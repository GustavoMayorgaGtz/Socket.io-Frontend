import { EventEmitter, Injectable } from '@angular/core';
import { io }  from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketService{
io = io("ws://192.168.100.129:3000/")
event : EventEmitter<String> = new EventEmitter();
  constructor() {}

 listen()
 {
    this.io.on("test", (res) => {
       this.event.emit(res);
    })
  }
  sendMail(message: String)
  {
    this.io.emit("test",message);
  }


}
