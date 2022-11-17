import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabToggleModule } from "../../shared/components/tab-toggle/tab-toggle.module";
import { RouterModule } from "@angular/router";
import { NewFeedComponent } from "./new-feed.component";



@NgModule({
  declarations: [
    NewFeedComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: NewFeedComponent
      }
    ]),
    TabToggleModule
  ],
  exports:[
    NewFeedComponent,
  ]
})
export class NewFeedModule { }
