import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StudentInterface } from './student';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor(private _http: HttpClient) { }
  private _url = "../assets/data.json";
  //private _url = "https://run.mocky.io/v3/011cf505-9e52-4809-83f1-a07298e43c72";
  
  getStudents():Observable<StudentInterface[]>{
    return this._http.get<StudentInterface[]>(this._url).pipe(catchError(this.errorHandler));

   
  }

  errorHandler(error: HttpErrorResponse) {
      return throwError(error.message || "Unknown Error");
  }

  
}
