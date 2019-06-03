import { Component, OnInit } from '@angular/core';
import {Article} from "../article";
import {MainService} from "./main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public articles: Article[];

  constructor(private as: MainService) {
  }

  ngOnInit() {
    this.as.getArticles().subscribe((data:Article[])=>this.articles = data);
  }

}
