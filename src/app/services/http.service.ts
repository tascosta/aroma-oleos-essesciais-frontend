import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = config.apiRoute;
  }

  post(apiRoute: String, body: any) {
    return this.http.post(`${this.url + apiRoute}`, body, {headers: this.getHttpHeaders()});
  }

  postSemHeader(apiRoute: String, body: any) {
    return this.http.post(`${this.url + apiRoute}`, body);
  }

  get(apiRoute: String) {
    return this.http.get(`${this.url + apiRoute}`);
  }

  put(apiRoute: String, id:String, body: any) {
    return this.http.put(`${this.url + apiRoute +'/'+ id}`, body);
  }

  delete(apiRoute: String) {
    return this.http.delete(`${this.url + apiRoute}`);
  }

  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders({'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Access-Control-Allow-Methods, Content-Type, Accept, Accept-Language, Origin, User-Agent'
  });
  }
}
