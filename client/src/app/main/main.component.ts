import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../article";
import {ArticleService} from "../article/article.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  articles: Article[];

  constructor(private as: ArticleService) {
  }

  ngOnInit() {
    this.as.getArticles().subscribe((data:Article[])=>this.articles = data);
  }

}
