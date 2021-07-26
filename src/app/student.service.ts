import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(){
    return  [{"name":"mohan","age":"18","gender":"male"},
      {"name":"nomi","age":"18","gender":"female"},
      {"name":"raj","age":"18","gender":"male"},
      {"name":"vicky","age":"18","gender":"male"}
    ];
  }

  constructor() { }
}
