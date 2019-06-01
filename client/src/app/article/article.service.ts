import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

import {Article} from "../article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  uri = 'http://localhost:4000/api/name';

  constructor(private http: HttpClient) {
  }

  getArticle(): Observable<Article[]> {
    return this
      .http
      .get<Article[]>(`${this.uri}`);
  }
}
