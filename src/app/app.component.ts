import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  today : Date = new Date();  
  public msg="";

  
  public parentMsg = "This is from AppComponent Parent";

  
}
