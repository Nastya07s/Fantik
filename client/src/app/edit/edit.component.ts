import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {Chapter} from "../models/Chapter";
import {MainService} from "../services/main.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ArticleService} from "../services/article.service";
import {environment} from "../../environments/environment";
import {Genre} from "../models/genre";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  chapters: Chapter[];
  public article: Article;
  genres: Genre[];
  form: FormGroup;
  name: String;
  uri = environment.apiUrl;

  constructor(private mainService: MainService,
              private articleService: ArticleService,
              private activeRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,) {

    // this.name=this.article.name;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl(null),
      description: new FormControl(null),
      genre: new FormControl(null),
    });
    // console.log(this.article._id);
    this.mainService.getGenres().subscribe((genres: Genre[]) => this.genres = genres);
    this.mainService.getArticleUser(this.activeRoute.snapshot.params.articleId)
      .subscribe((data: Article) => {
        this.article = data;
        this.chapters = data.chapters;
        this.form.patchValue({
          name: this.article.name,
          description: this.article.description,
          genre: this.article.genre.name,
        });
      });

  }

  editArticle() {
    this.articleService.updateArticle(this.article._id, this.form.value).subscribe((article: Article) => {
      this.router.navigateByUrl('/user');
    })

  }
}
