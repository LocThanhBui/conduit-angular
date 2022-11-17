import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./features/new-feed/new-feed.module").then(m => m.NewFeedModule)
  },
  {
    path: "sign-in",
    loadChildren: () => import("./features/sign-in/sign-in.module").then(m => m.SignInModule)
  },
  {
    path: "sign-up",
    loadChildren: () => import("./features/sign-up/sign-up.module").then(m => m.SignUpModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
