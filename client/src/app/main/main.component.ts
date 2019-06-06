import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";
import {MainService} from "../services/main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public articles: Article[];

  constructor(private ms: MainService) {
  }

  ngOnInit() {
    this.ms.getArticles().subscribe((data:Article[])=>this.articles = data);
  }

}
