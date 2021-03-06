import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, ComponentFactoryResolver,  ElementRef,  HostListener, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { EventEmitter } from "@angular/core";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user-service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input('pickedDate') pickedDate?: string;

  popuna:boolean=false;
  popuna1: boolean=false;
  public show:boolean=false;
  
  id?:number;
  name?:string;
  surname?:string;
  email?:string;
  phone?:number;
  password?:number;
  CheckIn?:number;
  CheckOut?:number;

  
  faWindowClose=faWindowClose;


  constructor( private service:UserService,private elementRef: ElementRef) {

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

  onSubmit(){
    if(!this.name){
      alert("Please fill name");
      
    }

    
    const User =  {
      name:this.name,
      surname:this.surname,
      email:this.email,
      phone:this.phone,
      password:this.password,
      CheckIn:this.CheckIn,
      CheckOut:this.CheckOut,
      pickedDate:this.pickedDate
    }
    console.log(User);
    this.service.reserveUser(User);
  }

  Zatvori(){
    this.elementRef.nativeElement.remove(); 
   }

  CheckField(){
    if(!this.name && !this.surname && !this.email && !this.phone){
      this.popuna=false;
      console.log("Nije popunjeno")
    }
    else{
      this.popuna=true;
      console.log("Popunjeno je")
    }
  }
  
  CheckAllFields(){
    if(!this.password && !this.CheckIn && !this.CheckOut){
      this.popuna1=false;
      console.log("Nije popunjeno dole")
    }
     else{
      this.popuna1=true;
      console.log("Popunjneno je dole")
    }
  }

} 
