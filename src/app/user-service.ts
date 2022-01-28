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
 
 users=[];


  constructor(private http:HttpClient ) {}

  
  getUser(){
    this.http.get('http://localhost:5000/users').subscribe(res=>{
      res=this.users
      console.log(res);
    })
  }

  reserveUser(User:any){
     
       return this.http.post(this.apiUrl,User,this.httpOptions)
  }
  
  
}
     

