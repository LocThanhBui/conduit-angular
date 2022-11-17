import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from "./new-article/new-article.component";
import { EditArticleComponent } from "./edit-article/edit-article.component";
import { ArticleFormComponent } from "./article-form/article-form.component";



@NgModule({
  declarations: [
    NewArticleComponent,
    EditArticleComponent,
    ArticleFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NewArticleComponent,
    EditArticleComponent,
    ArticleFormComponent
  ]
})
export class EditorModule { }
