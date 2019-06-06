import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {MainService} from "../services/main.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {Chapter} from "../models/Chapter";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  article: Article;
  chapters: Chapter[];

  constructor(private ms: MainService,private activeRoute:ActivatedRoute ) {
  }

  ngOnInit() {
    this.ms.getArticle(this.activeRoute.snapshot.params.articleId)
      .subscribe((data:Article)=>{
        this.chapters = data.chapters;
        this.article = data;
        this.ms.setArticle(this.article);
      });

  }

}
