import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  url='http://localhost:5000/api/generate';
  constructor(private http: HttpClient) { }

addHero (data: any){
  debugger
  return this.http.post(this.url, data).subscribe(
    res => {

      console.log(res);
    },
    (err) => {
      console.log(err.error);
      console.log(err.name);
      console.log(err.message);
      console.log(err.status);
    }
  );
}
}
