import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { TabToggleComponent } from 'src/app/shared/components/tab-toggle/tab-toggle.component';
import { TabToggleModule } from 'src/app/shared/components/tab-toggle/tab-toggle.module';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: ProfileComponent
      }
    ]),
    TabToggleModule
  ],
  exports:[
    ProfileComponent
  ]
})
export class ProfileModule { }
