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
    `,
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {

  public students = [] as any; //problem of strings mismatched with any

  constructor(private _stdService: StudentService) { } //Dependency Injection and Service usauge

  ngOnInit() {
    this.students = this._stdService.getStudents();
  }

}
