import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, ComponentFactoryResolver,  ElementRef,  HostListener, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { EventEmitter } from "@angular/core";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { convertToObject } from 'typescript';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { UserComponent } from '../user/user.component';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input('pickedDate') pickedDate?: string;
  @Output() onAddUser: EventEmitter<UserComponent>=new EventEmitter()
  
  public show:boolean=false;
  
  name?:string;
  surname?:string;
  email?:string;
  phone?:number;
  password?:number;
  CheckIn?:number;
  CheckOut?:number;


faWindowClose=faWindowClose;
newUser: UserComponent | undefined;

  constructor( private http:HttpClient,private elementRef: ElementRef) {

   }

  ngOnInit(): void {  
  
  }

  getName(){
    console.log( this.name);
  }

  getSurname(){
    console.log(this.surname)
  }

  getEmail(){
    console.log(this.email);
  }

  getPhone(){
    console.log(this.phone);
  }
  getPassword(){
    console.log(this.password)
  }
  getCheckin(){
    console.log(this.CheckIn)
  }

  getCheckOut(){
    console.log(this.CheckOut)
  }

  getPickedDate(){
    console.log(this.pickedDate)
  }

  Clicked()
  {
    console.log("klik")
  }

  onSubmit(){
    if(!this.name){
      alert("Please fill name");
    }
    
    const newUser = {
      name:this.name || undefined,
      surname:this.surname || undefined,
      email:this.email || undefined,
      phone:this.phone || undefined, 
      CheckIn:this.CheckIn || undefined,
      CheckOut:this.CheckOut || undefined
    }

    this.onAddUser.emit(this.newUser)
  }
  
  Zatvori(){
    this.elementRef.nativeElement.remove(); 
   }

   ChangeStep(){}

}
