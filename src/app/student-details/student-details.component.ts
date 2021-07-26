import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-details',
  template: `
    <h1>
      student-details Component works!

    </h1>

    <ul *ngFor="let x of students">
      <li> {{x.name}} -- {{x.age}} -- {{x.gender}} </li>

    </ul>

    <h1> Error: {{errMsg}}  </h1>
    `,
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {

  public students = [] as any; //problem of strings mismatched with any
  errMsg="";

  constructor(private _stdService: StudentService) { } //Dependency Injection and Service usauge

  ngOnInit() {
    this.students = this._stdService.getStudents().subscribe(data=>this.students=data,error=>this.errMsg=error);
  }

}
