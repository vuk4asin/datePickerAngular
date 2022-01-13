import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  valueName:any;
  valueEmail:any;
  valueNumber:any;
  valueAdults:any;  
  valueChildren:any;
  valueList:any;

  constructor(private http :HttpClient) {
    
   }

  ngOnInit(): void {  
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

  Clicked()
  {
    console.log("klik")
  }

  onSubmit(data:any){
    console.warn(data);
  }

}
