import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {Chapter} from "../models/Chapter";
import {MainService} from "../services/main.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  chapters: Chapter[];
  article: Article;
  form: FormGroup;
  name: String;

  constructor(private mainService: MainService, private activeRoute: ActivatedRoute,
              private fb: FormBuilder) {
    // this.name=this.article.name;
  }

  ngOnInit() {
    this.mainService.getArticleUser()
      .subscribe((data: Article) => {
        this.article = data;
        this.chapters = data.chapters;
        // this.mainService.setArticle(this.article);

        var description = this.article.description;
        this.form = new FormGroup({
          name: new FormControl(this.article.name),
          description: new FormControl(null),
          genre: new FormControl(null),
        });
      }, (error) => {

      }, () => {
        // this.form.setValue(name:{name:this.article.name}) = this.article.name;
      });

  }

}
