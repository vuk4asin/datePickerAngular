import { IfStmt } from '@angular/compiler';
import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';

export interface Days{
  id: number,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatePicker';
  public DaysII:Days[];
  @Input('width') width!: string;
  @Input('height') height!: string;
  constructor(){
    this.DaysII= new Array<Days>(35);
  }

  ngOnInit():void {
    setTimeout(() => {
      console.log(this.width)
    }, 1);
   
  }

  public Months:Array<Object> = [
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

public DaysI:Days[] = [
  {id: 1, text: 'Monday'},
  {id: 2, text: 'Tuesday'},
  {id: 3, text: 'Wednesday'},
  {id: 4, text: 'Thursday'},
  {id: 5, text: 'Friday'},
  {id: 6, text: 'Saturday'},
  {id: 7, text: 'Sunday'},
  
];

}
