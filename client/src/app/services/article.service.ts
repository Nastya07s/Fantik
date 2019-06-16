import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Article} from "../models/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chapter} from "../models/Chapter";

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  uri = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getMyArticles() {
    return this
      .http
      .get(`${this.uri}` + '/myArticles')
      ;
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.uri}` + '/user/create', article)
  }

  destroy(articleId: String): Observable<Boolean> {
    return this.http.post<Boolean>(`${this.uri}` + '/user/destroy', {articleId})
  }

  updateArticle(articleId: String, article: Article): Observable<Article> {
    return this.http.patch<Article>(`${this.uri}/user/update/${articleId}`, article)
  }

  createChapter(articleId: String,chapter: Chapter): Observable<Chapter>{
    return this.http.post<Chapter>(`${this.uri}` + '/user/appchapter/'+`${articleId}`, chapter)
  }
}
