import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from '../services.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserInfo} from "../../constants/type";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(API_CONFIG) private uri: string, private http: HttpClient ) { }

  authorize(): Observable<UserInfo> {
    // @ts-ignore
    return this.http.get(this.uri + 'auth');
  }
}
