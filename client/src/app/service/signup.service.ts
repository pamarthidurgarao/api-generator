import {UserModel} from '../dto/usermodel';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SignupService {

  url: string = '/api/saveOrUpdate';
  constructor(private http: HttpClient) {}

  signup(user: UserModel): Observable<any> {

    return this.http.post<UserModel>(this.url, user);
  }

}
