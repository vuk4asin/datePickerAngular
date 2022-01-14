import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, ComponentFactoryResolver, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { EventEmitter } from "@angular/core";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  users:any;
  user:any;
  
  valueName:any;
  valueEmail:any;
  valueNumber:any;
  valueAdults:any;  
  valueChildren:any;
  valueList:any;
  valueAnything:any;


  constructor(private http:HttpClient) {
    this.users=[]
    this.user={
      name: this.valueName,
      email: this.valueEmail,
      phone: this.valueNumber,
      adults: this.valueAdults,
      children: this.valueChildren,
      roomPreferences: this.valueList,
      anything: this.valueAnything
    };
   }

  ngOnInit(): void {  
    this.getUsers()
  }

  getUsers(){
    this.http.get('http://localhost:3000/users').subscribe(res=>{
     this.users=res;
     console.log(this.users);
    })
  }

  postUsers(){
    
    this.http.post('http://localhost:3000/users',this.user,this.httpOptions).subscribe((res)=>{

      alert("User Saved");
    });
  }

  getName(){
    console.log( this.valueName);
  }
  getEmail(){
    console.log(this.valueEmail);
  }
  getNumber(){
    console.log(this.valueNumber);
  }
  getAdults(){
    console.log(this.valueAdults);
  }
  getChildren(){
    console.log(this.valueChildren);
  }
  getList(){
    console.log(this.valueList);
  }
  getAnything()
  {
    console.log(this.valueAnything);
  }

  Clicked()
  {
    console.log("klik")
  }

  onSubmit(data:any){
    console.warn(data);
  }

}
