import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { Observable } from 'rxjs';
import { UserComponent } from './user/user.component';

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

  


  reserveUser(user: UserComponent): Observable<UserComponent>{
    return this.http.post<UserComponent>(this.apiUrl,user,this.httpOptions)
  }
}
     

