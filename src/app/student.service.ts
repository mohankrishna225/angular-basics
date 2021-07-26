import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentInterface } from './student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor(private _http: HttpClient) { }
  //private _path = "../assets/data.json";
  private _url = "https://run.mocky.io/v3/011cf505-9e52-4809-83f1-a07298e43c72";
  
  getStudents():Observable<StudentInterface[]>{
    return this._http.get<StudentInterface[]>(this._url);

   
  }

  
}
