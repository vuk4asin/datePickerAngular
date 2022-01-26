import { Component, OnInit ,Input} from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('pickedDate') pickedDate?: string;

  name?:string;
  surname?: string;
  email?:string;
  phone?:number;
  password?: number;
  CheckIn?:number;
  CheckOut?:number;
  PickedDate?:string;

  constructor() {
   }

  ngOnInit(): void {
  }

   
  

}
