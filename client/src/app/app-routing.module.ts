import {NgModule} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {ChaptersComponent} from "./chapters/chapters.component";
import {ChapterComponent} from "./chapter/chapter.component";
import {GenresComponent} from "./genres/genres.component";
import {AuthorsComponent} from "./authors/authors.component";

const routes = [
  {path: ':articleId/:chapterId', component: ChapterComponent},
  {path: 'genres', component: GenresComponent},
  {path: 'authors', component: AuthorsComponent},
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
