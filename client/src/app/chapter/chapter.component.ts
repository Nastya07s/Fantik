import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";
import {MainService} from "../services/main.service";
import {ActivatedRoute} from "@angular/router";
import {Chapter} from "../models/Chapter";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  chapter:Chapter;
  article:Article;
  numberChapter: Number;

  constructor(private ms: MainService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.chapter = this.ms.getChapter(this.activeRoute.snapshot.params.chapterId-1);
    this.ms.getArticle(this.activeRoute.snapshot.params.articleId).subscribe((data:Article)=>this.article=data);
    this.numberChapter=this.activeRoute.snapshot.params.chapterId;
  }

}
