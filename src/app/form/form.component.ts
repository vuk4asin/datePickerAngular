import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, ComponentFactoryResolver,  ElementRef,  HostListener, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { EventEmitter } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { convertToObject } from 'typescript';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input('pickedDate') pickedDate?: string;
  
   httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
 
   getUsers(){
    this.http.get('http://localhost:3000/users').subscribe(res=>{
     this.users=res;
     console.log(this.users);
    })
  }
  users:any;
  user:any;

  public show:boolean=false;
  
  valueName:any;
  valueSurname:any;
  valueEmail:any;
  valuePhone:any;
  valuePassword:any;
  valueCheckOut:any;
  valueCheckIn:any;
  valuePickedDate=this.pickedDate;
    
faWindowClose=faWindowClose;

  constructor( private http:HttpClient,private elementRef: ElementRef) {
    this.users=[]
    this.user={
      name: this.valueName,
      surname:this.valueSurname,
      email: this.valueEmail,
      phone: this.valuePhone,
      password:this.valuePassword,
      pickedDate:this.valuePickedDate
    };
   }

  ngOnInit(): void {  
  
  }

  postUsers(){
    this.http.post('http://localhost:3000/users',this.user,this.httpOptions).subscribe((res)=>{
       alert("User Saved");
    });
  }

  getName(){
    console.log( this.valueName);
  }

  getSurname(){
    console.log(this.valueSurname)
  }

  getEmail(){
    console.log(this.valueEmail);
  }

  getPhone(){
    console.log(this.valuePhone);
  }
  getPassword(){
    console.log(this.valuePassword)
  }
  getCheckin(){
    console.log(this.valueCheckIn)
  }

  getCheckOut(){
    console.log(this.valueCheckOut)
  }

  getPickedDate(){
    console.log(this.pickedDate)
  }

  Clicked()
  {
    console.log("klik")
  }

  onSubmit(data:any){
    console.warn(data);
  }

  CheckField(){
    if(this.valueName!=='' && this.valueSurname!=='' && this.valueEmail!==''){
      const el = document.querySelectorAll('form-control');
      console.log(el);
    }
  }

  CheckAllField(){
    if(this.valuePhone!=='' && this.valuePassword!=='' && this.valueCheckIn!=='' && this.valueCheckOut!==''){
      
    }
  }

  Zatvori(){
    this.elementRef.nativeElement.remove(); 
   }

   ChangeStep(){}

}
