import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../models/article";
import {MainService} from "../services/main.service";
import {ArticleService} from "../services/article.service";
import {Chapter} from "../models/Chapter";

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {

  form: FormGroup;
  article: Article;

  constructor(private mainService: MainService,
              private articleService: ArticleService,
              private fb: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl(null),
      text: new FormControl(null),
    });
    this.mainService.getArticleUser(this.activeRoute.snapshot.params.articleId)
      .subscribe((data: Article) => {
        this.article = data;
      });
  };

  createChapter() {
    this.articleService.createChapter(this.activeRoute.snapshot.params.articleId,this.form.value)
      .subscribe((data: Chapter) => {

        // this.article = data;
        // this.chapters = data.chapters;
        // this.form.patchValue({
        //   name: this.article.name,
        //   description: this.article.description,
        //   genre: this.article.genre.name,
        // });
      });
    this.router.navigate(['/',this.article._id])
  }

}
