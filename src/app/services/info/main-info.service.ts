import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from '../services.module';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainInfoService {

  constructor(@Inject(API_CONFIG) private uri: string, private http: HttpClient ) { }
  getMainInfo(name): Observable<any> {
    const params = new HttpParams().set('name', name);
    return this.http.get(this.uri + 'main_info', {params});
  }
  getUrl(name): Observable<any> {
    const params = new HttpParams().set('name', name);
    return this.http.get(this.uri + 'url', {params});
  }
  getKey(name): Observable<any> {
    const params = new HttpParams().set('name', name);
    return this.http.get(this.uri + 'key', {params});
  }
}
