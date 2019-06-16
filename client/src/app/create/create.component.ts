import {Component, OnInit} from '@angular/core';
import {Genre} from "../models/genre";
import {MainService} from "../services/main.service";
import {ArticleService} from "../services/article.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  genres: Genre[];
  form: FormGroup;

  constructor(private mainService: MainService,
              private articleService: ArticleService,
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
    })

  }

  createNewArticle() {
    // console.log(this.form.value);
    this.articleService.createArticle(this.form.value).subscribe(
      ()=>{this.router.navigate(['/user'])});
  }

}
