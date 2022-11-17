import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SignInComponent } from "./sign-in.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: SignInComponent
      }
    ]),
    ReactiveFormsModule
  ],
  exports: [
    SignInComponent

  ]
})
export class SignInModule {
}
