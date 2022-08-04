import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";

  export interface formLogin {
    username: String;
    
  }

  export interface formLoginBuilder extends FormGroup{
    value: formLogin;
    controls: {
      username: AbstractControl;
      
    }
  }