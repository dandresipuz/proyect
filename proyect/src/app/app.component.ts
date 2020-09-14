import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activo:string;
  show:boolean = true;
  inicio:string;
  // languages:string[] = ['HTML', 'ANGULAR','PHP'];
  persons:Array<any> = [
    {lastname:'Castañeda',name:'Andrea',age:34},
    {lastname:'Olarte',name:'Brayan',age:18},
    {lastname:'Ipuz',name:'Samantha',age:7},
    {lastname:'Ipuz',name:'Diego',age:34},
  ]
  items:number[] = [1&15];
}
