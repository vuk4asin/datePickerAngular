import { IfStmt } from '@angular/compiler';
import { Component, ComponentFactoryResolver, Inject, Input, OnInit } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faOtter } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


export interface selectedDate{
  monthID: number,
  year: number,
  day: string
};

export interface Days{
  id: number,
  text: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatePicker';
  public Months: any[];
  public DaysI: any[];
  faAngleLeft = faAngleLeft;
  faAngleRight= faAngleRight;
  public curentD: selectedDate;
  public DaysII:Days[];
  public stepD: number;
  @Input('width') width!: string;
  @Input('height') height!: string;
  constructor(){
    this.stepD = 0;
    this.curentD = {} as selectedDate;
    this.setCurentDate();
    this.Months = [
      {id: 1, text: 'January'},
      {id: 2, text: 'Februar'},
      {id: 3, text: 'March'},
      {id: 4, text: 'April'},
      {id: 5, text: 'May'},
      {id: 6, text: 'June'},
      {id: 7, text: 'July'},
      {id: 8, text: 'August'},
      {id: 9, text: 'September'},
      {id: 10, text: 'October'},
      {id: 11, text: 'November'},
      {id: 12, text: 'December'},
    ];
    this.DaysI = [
      {id: 1, text: 'Monday'},
      {id: 2, text: 'Tuesday'},
      {id: 3, text: 'Wednesday'},
      {id: 4, text: 'Thursday'},
      {id: 5, text: 'Friday'},
      {id: 6, text: 'Saturday'},
      {id: 7, text: 'Sunday'},
    ];
    this.DaysII= new Array<Days>(35);
    for(let i =0; i<35;i++){
      let d = {} as Days;
      d.id = i;
      d.text = "";
      this.DaysII[i] = d;
    }
    console.log(this.DaysII)
    this.SetCalendar();
  }
  setCurentDate(){
    const d = new Date();
    this.curentD.monthID = d.getMonth();
    this.stepD = this.curentD.monthID;
  }

    SetCalendar(d?:Date){
      let dTemp: Date;
      let startDay: string;
      let endDay: string;
      if(d != undefined){
        dTemp = d;
      }
      else{
        dTemp  = new Date();
      }
      let j=1;
      for(let i=2; i<33; i++){
        this.DaysII[i].text = (j++).toString();
      }
      let m=30;
      for(let i=0;i<2;i++){
        this.DaysII[i].text = (m++).toString();
      }
      let n = this.DaysII[33];
      let b = n.id;
    
      console.log(b);
      n.text="1";
      let k = this.DaysII[34];
      k.text="2";

    }

    PromeniMesec(step: number){
      this.stepD += step;
      if(this.stepD > 11)
        this.stepD = 0;
      if(this.stepD < 0)
        this.stepD = 11;
      this.curentD.monthID = this.stepD;
    }
    

   

  ngOnInit():void {
    setTimeout(() => {
      console.log(this.width)
    }, 1);

  }




}
