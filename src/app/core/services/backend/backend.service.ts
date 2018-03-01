import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { environment } from '@env/environment';

@Injectable()
export class BackendService {

  basePath: string;
  
  constructor(private http:HttpClient) {
    this.basePath = environment.serverUrl;
   }


  get (path:String):Observable<any>{
    return this.http.get (this.basePath + path);
  }

  post (path:String, data: any):Observable<any>{
    return this.http.post (this.basePath + path, data);
  }

  private getHeaders (){

  }
}
