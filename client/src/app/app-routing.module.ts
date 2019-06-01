import {NgModule} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {ArticleComponent} from "./article/article.component";
import {MainComponent} from "./main/main.component";
import {ChapterComponent} from "./chapter/chapter.component";

const routes = [
  {path: 'name', component: ChapterComponent},
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
