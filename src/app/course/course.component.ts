import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course', // selector: '.app-course', // selector: '[app-course]',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  name= "Mohan"; 
  public myUrl: string = window.location.href; //Interpolation
  //property Binding
  courseid = 1;
  courseid1 = 2;
  isDisabled = true;

  //Class Binding
  myText = "TextColor"; //TextColor is defined in CSS Styles {course.component.css}  
  required = true;
  myGroup = {
    "TextColor": this.required,
    "TextSize": this.required,
    "TextStyle": !this.required
  }

  //Style Binding
  myColor = "aqua";
  required1 = true;
  myStyles = {
    "color": "red",
    "font-Style": "italic",
    "fontSize": "50px"
  
  }

  //event binding
  greetings = "";
  onClick()
  {
    this.greetings = "event binding works";
  }

  //Template Ref Variables
  message(message:any)
  {
    console.log(message);
  }

  //Two way binding
  data="";

  //ngIf
  status = false;

  //ngSwitch
  mychoice = "five";

  constructor() { }

  ngOnInit(): void {
  }

}
