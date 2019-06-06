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

  constructor(private ms: MainService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.chapter  =this.ms.getChapter(this.activeRoute.snapshot.params.chapterId);
      // .subscribe((data:Chapter)=>{this.chapter = data;});
  }

}
