import { Component, signal } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=["Nishit", "Raj", "Sanjay", "Mohit","Kenil"];
  students=
  [
    {
      name:"Nishit",
      age:24,
      email:"nishit@gmail.com"
    },
    {
      name:"Raj",
      age:25,
      email:"raj@gmail.com"
    },
    {
      name:"Sanjay",
      age:23,
      email:"sanjay@gmail.com"
    },
    {
      name:"Mohit",
      age:26,
      email:"mohit@gmail.com"
    },
    {
      name:"Kenil",
      age:24,
      email:"kenil@gmail.com"
    }
  ]

  getName(xx:string){
    console.log(xx);
    }
}
