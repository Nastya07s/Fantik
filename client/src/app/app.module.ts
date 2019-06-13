import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {ChaptersComponent} from './chapters/chapters.component';
import {AppRoutingModule} from "./app-routing.module";
import {SortPipe} from './pipes/sort.pipe';
import {SlicePipe} from './pipes/slice.pipe';
import {ChapterComponent} from './chapter/chapter.component';
import {GenresComponent} from './genres/genres.component';
import {UserPageComponent} from './user-page/user-page.component';
import {MyArticlesComponent} from './my-articles/my-articles.component';
import {EditComponent} from './edit/edit.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {MustMatch} from './mustMatch';
import { ConfirmedEmailComponent } from './confirmed-email/confirmed-email.component'
import {TokenInterceptor} from "./classes/token.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChaptersComponent,
    SortPipe,
    SlicePipe,
    ChapterComponent,
    GenresComponent,
    UserPageComponent,
    MyArticlesComponent,
    EditComponent,
    RegisterComponent,
    LoginComponent,
    ConfirmedEmailComponent,
    // MustMatch,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
