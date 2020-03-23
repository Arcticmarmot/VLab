import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../services.module';
import {Observable} from 'rxjs';
import {UserData} from '../../constants/type';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(@Inject(API_CONFIG) private uri: string, private http: HttpClient ) {
  }

  login(user: UserData): Observable<any> {
    return this.http.post(this.uri + 'login', {account: user.account, password: user.password});
  }
}
