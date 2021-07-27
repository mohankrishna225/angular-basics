import {  AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {FormsModule} from '@angular/forms';
//import { StudentListComponent } from './student-list/student-list.component';
//import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { myRoutings } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    myRoutings
   // StudentListComponent,
    //StudentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
