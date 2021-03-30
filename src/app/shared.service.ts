import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) {}

  signup(login:string ,psw :string,cpsw:string){

    return this.http.post(`http://localhost:8001/signup/`, 
    { login,
       psw, 
       cpsw
      });
  }
}
