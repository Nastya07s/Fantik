import {Component, OnInit} from '@angular/core';
import {Article} from "../article";
import {MainService} from "../main/main.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  name: String;

  chapters: Object;

  constructor(private as: MainService,private activeRoute:ActivatedRoute) {
  }

  ngOnInit() {
    // this.name =  this.as.name;
    this.as.getChapters(this.activeRoute.snapshot['_routerState'].url)
      .subscribe((data:Article)=>this.chapters = data.chapters);
  }

}
