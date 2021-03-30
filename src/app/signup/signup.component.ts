import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import {SharedService} from '../shared.service';
import { FormBuilder, FormGroup ,Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  public login : string 

  constructor(
    private service :SharedService,
    private signupForm:FormGroup,
    private form : FormBuilder){}
  
   
      
  
  

  ngOnInit(){}
  


}



  


