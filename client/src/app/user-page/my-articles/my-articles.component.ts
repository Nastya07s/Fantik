import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";
import {Genre} from "../../models/genre";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  public articles: Article[];
  genres: Genre[];
  activeArticle: Article;

  constructor(private articleService: ArticleService,
              private mainService: MainService,
              private activeRoute:ActivatedRoute,
              private router: Router, ) { }

  ngOnInit() {
    // this.ms.getArticles().subscribe((data:Article[])=>this.articles = data);
    this.articleService.getMyArticles().subscribe((data:Article[])=> this.articles = data);
    this.mainService.getGenres().subscribe((genres: Genre[]) => this.genres = genres);
  }

  redirectToCreate(){
    this.router.navigate([this.router.url+"/create"])
  }

  redirectToEdit(){
    this.router.navigate([this.router.url+"/edit"])
  }

  rowSelected(article: Article){
    this.activeArticle = article;
  }

}
