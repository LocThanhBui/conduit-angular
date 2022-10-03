import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/layout/header/header.component";
import { FooterComponent } from './core/layout/footer/footer.component';
import { NewFeedComponent } from './features/new-feed/new-feed.component';
import { TabToggleComponent } from './shared/components/tab-toggle/tab-toggle.component';
import { ArticleListComponent } from './shared/components/article-list/article-list.component';
import { ArticleComponent } from './shared/components/article/article.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewFeedComponent,
    TabToggleComponent,
    ArticleListComponent,
    ArticleComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
