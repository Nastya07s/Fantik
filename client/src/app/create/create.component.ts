import {Component, OnInit} from '@angular/core';
import {Genre} from "../models/genre";
import {MainService} from "../services/main.service";
import {ArticleService} from "../services/article.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../models/article";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  genres: Genre[];
  form: FormGroup;
  article: Article;

  constructor(private mainService: MainService,
              private articleService: ArticleService,
              private activeRoute: ActivatedRoute,
              private router: Router,) {
  }

  ngOnInit() {
    this.mainService.getGenres().subscribe((genres: Genre[]) => this.genres = genres);
    this.form = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      genre: new FormControl(null),
    });
    this.form.patchValue({
      genre: 'Detective'
    });
    this.mainService.getArticleUser(this.activeRoute.snapshot.params.articleId)
      .subscribe((data: Article) => {
        this.article = data;
      });
    console.log(this.article);
  }

  createNewArticle() {
    // console.log(this.form.value);
    this.articleService.createArticle(this.form.value).subscribe(
      () => {
        this.router.navigate(['/user/create/', this.article._id,'/addchapter/'])
      });
  }

}
