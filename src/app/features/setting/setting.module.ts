import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from "./setting.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: SettingComponent }
    ]),
    ReactiveFormsModule
  ]
})
export class SettingModule { }
