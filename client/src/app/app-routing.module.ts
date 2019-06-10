import {NgModule} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {ChaptersComponent} from "./chapters/chapters.component";
import {ChapterComponent} from "./chapter/chapter.component";
import {GenresComponent} from "./genres/genres.component";
import {MyArticlesComponent} from "./my-articles/my-articles.component";
import {EditComponent} from "./edit/edit.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {ConfirmedEmailComponent} from "./confirmed-email/confirmed-email.component";

const routes = [
  {path: 'myArticles/:userId/edit', component: EditComponent},
  {path: 'myArticles/:userId', component: MyArticlesComponent},
  {path: 'confirmation/:emailToken', component: ConfirmedEmailComponent},
  {path: ':articleId/:chapterId', component: ChapterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userpage', component: UserPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'genres', component: GenresComponent},
  {path: ':articleId', component: ChaptersComponent},
  {path: '', component: MainComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  }
)

export class AppRoutingModule {

}
