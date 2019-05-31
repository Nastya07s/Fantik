import {Component, OnInit} from '@angular/core';
import {ArticleService} from './article.service';
import {article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: article[] = [];

  constructor(private as: ArticleService) {
  }

  ngOnInit() {
    this.as
      .getArticle()
      .subscribe((data: article[]) => {
        this.articles = data;
      });
  }

}
