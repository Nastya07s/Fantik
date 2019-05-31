import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  uri = 'http://localhost:4200/name';

  constructor(private http: HttpClient) {
  }

  getArticle() {
    return this
      .http
      .get(`${this.uri}`);
  }
}
