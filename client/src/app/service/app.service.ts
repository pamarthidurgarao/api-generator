import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppModel } from '../dto/appmodel';


@Injectable()
export class AppService {

  url: string = '/api/generate';
  constructor(private http: HttpClient) {}

  build(app: AppModel) {
    debugger
    this.http.post<AppModel>(this.url, app).subscribe(data=>{
      debugger
    });
  }
  download(app) {
    this.url='/api/download?fileName='+app;
    const headers1 = new HttpHeaders({'Content-Type':'application/zip;'});

    debugger
    this.http.get(this.url, {headers: {'Content-Type':'application/json;'}}).subscribe(this.downloadFile);
  }
  downloadFile(data){
    var blob = new Blob([data], { type: 'zip' });
    var url= window.URL.createObjectURL(blob);
    window.open(url);
  }
  private handleError(error: any) {
    debugger
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
         console.error(errMsg); // log to console instead
         return Observable.throw(errMsg);
 }
}
