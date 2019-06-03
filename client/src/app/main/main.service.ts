import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

import {Article} from "../article";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  uri = 'http://localhost:4000/api';
  id: String;

  constructor(private http: HttpClient) {
  }

  getArticles(){
    return this
      .http
      .get(`${this.uri}`)
    ;
  }

  getChapters(route: String){
    this.id = route.replace(this.uri,"");
    return this
      .http
      .get(this.uri+"/"+this.id);
  }
}
