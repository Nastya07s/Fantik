import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'name', component: ArticleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
