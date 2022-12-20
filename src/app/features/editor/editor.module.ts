import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from "./new-article/new-article.component";
import { EditArticleComponent } from "./edit-article/edit-article.component";
import { ArticleFormComponent } from "./article-form/article-form.component";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewArticleComponent,
    EditArticleComponent,
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: ArticleFormComponent
      }
    ]),
    ReactiveFormsModule
  ],
  exports:[
    NewArticleComponent,
    EditArticleComponent,
    ArticleFormComponent
  ]
})
export class EditorModule { }
