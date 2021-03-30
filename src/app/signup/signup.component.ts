import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  public email : string;
  public password : string;
  public passwordConfirm : string;

  constructor(
    public service :SharedService){
      this.email = "";
      this.password = "";
      this.passwordConfirm = "";
    }

  ngOnInit(){
  }
  
  public signUp() {
    this.service.signup(this.email, this.password, this.passwordConfirm);
  }

}
