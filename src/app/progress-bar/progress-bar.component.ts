import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
 
  width:any;
  @Input('clicked') clicked? :boolean;

  constructor() { 
   this.Uvecaj();
  }

  Uvecaj(){
    if (this.clicked==true)
    {
      let cls = document.getElementsByClassName("stepper-item active");
      console.log(cls);
    }
  }
 
  ngOnInit() {

  }

}
