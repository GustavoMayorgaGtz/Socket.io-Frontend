import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { formLoginBuilder } from 'src/app/interfaces';
import { SocketService } from 'src/app/Services/socket.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  public form !: formLoginBuilder;
  public mensajes :  String[] = [""];

  constructor(private socket: SocketService, private builder: FormBuilder) {
    this.form = this.builder.group({
      username: new FormControl("", Validators.required),
     
    }) as unknown as formLoginBuilder
   }

   ngOnInit(){
    this.socket.listen();
    this.socket.event.subscribe((data) => {

      this.mensajes.push(data);

    })
  }

  enviar()
  {
    if(this.form.valid)
    {
      console.log("send")
      let username = this.form.get("username");
       if(username)
       {
        let usernametext = username.value;
        this.socket.sendMail(usernametext);
       }
    
    }else
    {
      console.log("no send")
    }

  }

}
