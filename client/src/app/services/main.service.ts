import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

import {Article} from "../models/article";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";
import {Chapter} from "../models/Chapter";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  uri = environment.apiUrl;
  article: Article;

  constructor(private http: HttpClient) {
  }

  getArticles(){
    return this
      .http
      .get(`${this.uri}`)
    ;
  }

  getArticle(articleId: String){
    return this
      .http
      .get(`${this.uri}`+"/"+`${articleId}`);
  }

  getArticleUser(articleId: String){
    return this
      .http
      .get(`${this.uri}`+"/user/edit/"+`${articleId}`);
  }

  setArticle(article:Article){
    this.article = article;
  }

  getChapter(chapterId: Number){
    return this.article.chapters[chapterId.toString()];
  }

  getGenres(){
    return this
      .http
      .get(`${this.uri}`+"/genres");
  }
  //
  // getAuthors(){
  //   return this
  //     .http
  //     .get(`${this.uri}`+"/authors");
  // }
}
