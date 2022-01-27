import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class UserService {

   httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

private apiUrl='http://localhost:5000/users'
 

  constructor(private http:HttpClient ) {}

  
  getUser(){
    const users=[]
    this.http.get('http://localhost:5000/users').subscribe(res=>{
      console.log(res);
    })
  }

  reserveUser( user:any){

      try{
       this.http.post(this.apiUrl,user,this.httpOptions)
      }
      catch{
        console.log("Lose je nesto :D");  
      }
    
  }
  
  
}
     

