import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from "../services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(@Inject(API_CONFIG) private uri: string, private http: HttpClient ) { }
  postReport(report): Observable<any> {
    return this.http.post(this.uri + 'report', report);
  }
}
