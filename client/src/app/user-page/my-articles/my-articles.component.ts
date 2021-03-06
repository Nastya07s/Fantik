import {Component, OnInit} from '@angular/core';

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
  selected: boolean;

  constructor(private articleService: ArticleService,
              private mainService: MainService,
              private activeRoute: ActivatedRoute,
              private router: Router,) {
  }

  ngOnInit() {
    // this.ms.getArticles().subscribe((data:Article[])=>this.articles = data);
    this.articleService.getMyArticles().subscribe((data: Article[]) => this.articles = data);
    this.mainService.getGenres().subscribe((genres: Genre[]) => this.genres = genres);
  }

  redirectToCreate() {
    this.router.navigate([this.router.url + "/create"])
  }

  redirectToEdit(articleId: String) {
    this.router.navigate([this.router.url + "/edit/"+`${articleId}`])
  }

  destroy(articleId: String) {

    this.articleService.destroy(articleId).subscribe((fl: Boolean) => {
      var index = this.articles.indexOf(this.activeArticle);
      if (index > -1) {
        this.articles.splice(index, 1);
      }
    }, (error) => {
      console.log(error);
    })
  }

  rowSelected(article: Article) {
    this.selected = true;
    this.activeArticle = article;
  }

}
