import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserInfo} from "../../constants/type";
import {API_CONFIG} from "../services.module";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportStateService {

  constructor(@Inject(API_CONFIG) private uri: string, private http: HttpClient ) { }
  getReportState(): Observable<UserInfo> {
    // @ts-ignore
    return this.http.get(this.uri + 'report_state');
  }
}
