import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule, routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/layout/header/header.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { RouterModule } from "@angular/router";
import { SignUpModule } from "./features/sign-up/sign-up.module";
import { SignInModule } from "./features/sign-in/sign-in.module";
import { TabToggleComponent } from "./shared/components/tab-toggle/tab-toggle.component";
import { HttpClientModule } from "@angular/common/http";
import { SignUpComponent } from "./features/sign-up/sign-up.component";
import { ProfileModule } from "./features/profile/profile.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      useHash: false,
      initialNavigation: "enabledBlocking"
    }),
    SignUpModule,
    SignInModule,
    AppRoutingModule,
    HttpClientModule,
    ProfileModule
  ],
  exports: [
    SignUpModule,
    SignInModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
