import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Article} from "../models/article";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  uri = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getMyArticles(userId: string){
    return this
      .http
      .get(`${this.uri}`+'/myArticles/'+`${userId}`)
      ;
  }
}
