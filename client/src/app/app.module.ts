import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SlicePipe} from "@angular/common";

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {ChaptersComponent} from './chapters/chapters.component';
import {AppRoutingModule} from "./app-routing.module";
import {ChapterComponent} from './chapter/chapter.component';
import {GenresComponent} from './genres/genres.component';
import {UserPageComponent} from './user-page/user-page.component';
import {MyArticlesComponent} from './user-page/my-articles/my-articles.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ConfirmedEmailComponent} from './confirmed-email/confirmed-email.component'
import {TokenInterceptor} from "./classes/token.interceptor";
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {AddChapterComponent} from './add-chapter/add-chapter.component';
import {SortPipe} from "./pipes/sort.pipe";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChaptersComponent,
    // SlicePipe,
    SortPipe,
    ChapterComponent,
    GenresComponent,
    UserPageComponent,
    MyArticlesComponent,
    RegisterComponent,
    LoginComponent,
    ConfirmedEmailComponent,
    CreateComponent,
    EditComponent,
    AddChapterComponent,
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
