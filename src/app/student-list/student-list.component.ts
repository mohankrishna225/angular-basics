import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-list',
  template: `
    <h1>
      student-list  Component works!
    </h1>
    <ul *ngFor="let x of students">
      <li> {{x.name}} </li>
     <h1>  {{errMsg}}  </h1>

    </ul>

  `,
  styles: [`
    h1{
      text-align: center;
      font-size: 30px;
      color: green;
    }
  `
  ]
})
export class StudentListComponent implements OnInit {

  public students = [] as any;
  errMsg = "";

  constructor(private _stdService: StudentService) { }

  ngOnInit() {
    this.students = this._stdService.getStudents().subscribe(data=>this.students=data,error=>this.errMsg=error);
  }

}
