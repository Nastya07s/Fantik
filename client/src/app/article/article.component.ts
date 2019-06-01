import {Component, OnInit} from '@angular/core';
import {ArticleService} from './article.service';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // articles: Article[] = [];

  constructor(/*private as: ArticleService*/) {
  }

  ngOnInit() {
    // this.as
    //   .getArticle()
    //   .subscribe((data: Article[]) => {
    //     this.articles = data;
    //   });
  }

}
