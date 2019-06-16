import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {MainService} from "../services/main.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {Chapter} from "../models/Chapter";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  user: User;
  article: Article;
  chapters: Chapter[];
  isAuthenticated: Boolean;

  constructor(private ms: MainService,
              private activeRoute:ActivatedRoute,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe((user: User)=> this.user=user);
    this.ms.getArticle(this.activeRoute.snapshot.params.articleId)
      .subscribe((data:Article)=>{
        this.chapters = data.chapters;
        this.article = data;
        this.ms.setArticle(this.article);
        // console.log(this.article.author);
      });
    this.isAuthenticated = this.authService.isAuthenticated();
  }

}
