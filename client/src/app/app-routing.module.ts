import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {ChaptersComponent} from "./chapters/chapters.component";
import {ChapterComponent} from "./chapter/chapter.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {ConfirmedEmailComponent} from "./confirmed-email/confirmed-email.component";
import {AuthGuard} from "./classes/auth.guard";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [

  {path: 'confirmation/:emailToken', component: ConfirmedEmailComponent},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserPageComponent, canActivate: [AuthGuard]},
  {path: 'user/edit/:articleId', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'user/create', component: CreateComponent, canActivate: [AuthGuard]},
  {path: ':articleId/:chapterId', component: ChapterComponent},
  {path: ':articleId', component: ChaptersComponent},
  {path: '', component: MainComponent},
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),

    ],
    exports: [
      RouterModule
    ]
  }
)

export class AppRoutingModule {

}
