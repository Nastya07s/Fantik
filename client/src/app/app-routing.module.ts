import {NgModule} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {ChaptersComponent} from "./chapters/chapters.component";
import {ChapterComponent} from "./chapter/chapter.component";

const routes = [
  {path: ':id/:id', component: ChapterComponent},
  {path: ':id', component: ChaptersComponent},
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
