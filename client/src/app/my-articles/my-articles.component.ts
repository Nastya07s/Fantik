import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  public articles: Article[];

  constructor(private articleService: ArticleService,private activeRoute:ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.articleService.getMyArticles(this.activeRoute.snapshot.params.userId).subscribe((data:Article[])=>this.articles = data);
  }

  redirectToCreate(){
    console.log(this.activeRoute);
    this.router.navigate([this.router.url+"/edit"])
  }

}
