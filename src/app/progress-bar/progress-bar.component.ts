import { Component, HostListener, Input, OnInit } from '@angular/core'
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {


  width:any;
  constructor(private formComponent: FormComponent) { 
  }

  
  ngOnInit() {
    this.ActiveStep();
    this.formComponent.CheckAllField();
  }

  ActiveStep(){
    let e = document.getElementsByClassName("stepper-item active");
    console.log(e);
  }
  

  




}
