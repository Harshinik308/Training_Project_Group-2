import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginEntity, Project, TestCase } from '../models/interfaces';
import { Observable } from 'rxjs';
import { urls } from '../models/urls';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urls=urls;
  headers=new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
  constructor(private http:HttpClient) { }
  fetchLoginCredentials():Observable<LoginEntity>{
    return this.http.get<LoginEntity>(urls.fetchLogin,{headers:this.headers});
  }
  fetchProjectDetails():Observable<Project>{
    return this.http.get<Project>(urls.fetchProjectDetails,{headers:this.headers})
  }
  postAdditionTestCases(postData:any,id:any):Observable<TestCase>{
    const params=new HttpParams().set('projectId',id);
    return this.http.post<TestCase>(urls.postTestCases+'/post-addition-testcases',postData,{params:params});
  }
  postSubtractionTestCases(postData:any,id:any):Observable<TestCase>{
    const params=new HttpParams().set('projectId',id);
    return this.http.post<TestCase>(urls.postTestCases+'/post-subtraction-testcases',postData,{params:params});
  }
  postMultiplicationTestCases(postData:any,id:any):Observable<TestCase>{
    const params=new HttpParams().set('projectId',id);
    return this.http.post<TestCase>(urls.postTestCases+'/post-multiplication-testcases',postData,{params:params});
  }
}
