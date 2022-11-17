import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabToggleComponent } from "./tab-toggle.component";



@NgModule({
  declarations: [
    TabToggleComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TabToggleComponent
  ]
})
export class TabToggleModule { }
