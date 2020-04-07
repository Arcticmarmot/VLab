import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from "../services.module";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CorrectService {

  constructor(@Inject(API_CONFIG) private uri: string, private http: HttpClient ) { }
  getReportToCorrect(name): Observable<any> {
    const params = new HttpParams().set('name', name);
    return this.http.get(this.uri + 'report_to_correct', {params});
  }
  postCorrect(data): Observable<any> {
    return this.http.post(this.uri + 'report_to_correct', data);
  }
}
