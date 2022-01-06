import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { identity } from 'rxjs';



export interface selectedDate{
  monthID: number,
  year: number,
  day: string, 
  dateT: string
};

export interface Days{
  id: number,
  text: string
};

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  title = 'DatePicker';
  public Months: any[];
  public DaysI: any[];
  faAngleLeft=faAngleLeft;
  faAngleRight=faAngleRight;
  faAddressCard=faAddressCard;

  public curentD: selectedDate;
  public DaysII:Days[];
  public stepD: number;
  @Input('width') width!: string;
  @Input('height') height!: string;
  constructor(){
    
    this.stepD = 0;
    this.curentD = {} as selectedDate;

    this.setCurentDate();
  
  
    this.Months= [
      {id: 1, text: 'January'},
      {id: 2, text: 'February'},
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
    for(let i = 0; i<35;i++){
      let d = {} as Days;
      d.id = i;
      d.text = "";
      this.DaysII[i] = d;
    }
    console.log(this.DaysII);
    this.SetCalendar();
    /*this.uhvatiDiv();*/

  
  }
  setCurentDate(){
    const d = new Date();
    this.curentD.monthID = d.getMonth()   ;
    console.log(this.curentD.monthID);

    this.stepD = this.curentD.monthID ;
    this.curentD.year = d.getFullYear();
    this.curentD.day= d.getDay().toLocaleString()  ;
    console.log(this.curentD.day);
    const s = this.curentD.monthID + 1  + '-' + this.curentD.day.toString() + '-' + this.curentD.year.toString() ;
    this.curentD.dateT = s;


  }
  setYear(e: Event){
    this.curentD.year  = parseInt((<HTMLInputElement>e.currentTarget).value);
  }
  

    SetCalendar(d?:Date){
      let dTemp: Date;
      let startDay: string;
      let endDay: string;
      if(d!= undefined){
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
    
      n.text="1";
      let k = this.DaysII[34];
      k.text="2";

    }

    reserve(){
      console.log('res');
    }


    PromeniMesec(step: number){
      this.stepD += step;
      console.log(this.curentD)
      if(this.stepD > 11){
        this.stepD = 0;
        this.curentD.year++;
        console.log(this.curentD)
      }
        
      if(this.stepD < 0)
      {
        this.stepD = 11;
        this.curentD.year--;
      }
      this.curentD.monthID = this.stepD;
    }

    /*FresDiv(){
      const div = document.getElementsByClassName("PContainer");
      console.log(div);
    }*/

    pickAdate(e: Event){
      console.log((<HTMLDivElement>e.currentTarget).innerHTML);
      (<HTMLDivElement>e.currentTarget).style.backgroundColor = 'rgb(126, 155, 166)';
      const message = alert("Date selected");

    }

   
    /*uhvatiDiv(){

          for(let i=0; i<35;i++){
            const select:any=this.DaysII;
            console.log(select)
            if(select != undefined){
              return console.log("greska");
            }
              else {
              if(select[i].id == this.DaysII[i].id){
                var obj = document.getElementById("PContainer");
                obj?.style.backgroundColor == "rgb(197, 226, 232)";
            } 
          }
        }
       }
*/
  ngOnInit():void {
    setTimeout(() => {
      
    }, 1);
  }
  
} 