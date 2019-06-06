import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChaptersComponent } from './chapters/chapters.component';
import {AppRoutingModule} from "./app-routing.module";
import { SortPipe } from './pipes/sort.pipe';
import { SlicePipe } from './pipes/slice.pipe';
import { ChapterComponent } from './chapter/chapter.component';
import { GenresComponent } from './genres/genres.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChaptersComponent,
    SortPipe,
    SlicePipe,
    ChapterComponent,
    GenresComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
