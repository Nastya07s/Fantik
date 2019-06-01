import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../article";
import {ArticleService} from "../article/article.service";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private as: ArticleService) {
  }

  ngOnInit() {
    this.articles = this.as.getArticle();
  }

}
