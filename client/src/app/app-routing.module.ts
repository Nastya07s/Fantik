import {NgModule} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {ChaptersComponent} from "./chapters/chapters.component";
import {ChapterComponent} from "./chapter/chapter.component";
import {GenresComponent} from "./genres/genres.component";
import {MyArticlesComponent} from "./my-articles/my-articles.component";
import {EditComponent} from "./edit/edit.component";

const routes = [
  {path: 'myArticles/:userId/edit', component: EditComponent},
  {path: 'myArticles/:userId', component: MyArticlesComponent},
  {path: ':articleId/:chapterId', component: ChapterComponent},
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
