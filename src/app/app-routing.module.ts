import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewFeedComponent } from "./features/new-feed/new-feed.component";
import { SignInComponent } from "./features/sign-in/sign-in.component";
import { SignUpComponent } from "./features/sign-up/sign-up.component";

export const routes: Routes = [
  {
    path: "",
    component: NewFeedComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
