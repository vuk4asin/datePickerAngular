
import { Component, HostListener, Input, OnInit } from '@angular/core'
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
 @Input("popuna") popuna?: boolean;
 @Input("popuna1") popuna1?: boolean;
  test: boolean = false;
  width:any;
  constructor(private formComponent: FormComponent) { 
  }

  ngOnInit() {
   this.formComponent.CheckField();
   this.formComponent.CheckAllFields();
  }

 


}
