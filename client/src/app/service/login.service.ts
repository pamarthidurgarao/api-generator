import {UserModel} from '../dto/usermodel';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {

  url: string = '/api/findByMail';
  constructor(private http: HttpClient) {}

  login(email): Observable<any> {
    this.url = this.url + '?email=' + email;
    return this.http.get(this.url);
  }
}
