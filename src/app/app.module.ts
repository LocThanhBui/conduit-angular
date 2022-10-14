import { APP_INITIALIZER, Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule, routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/layout/header/header.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { NewFeedComponent } from "./features/new-feed/new-feed.component";
import { TabToggleComponent } from "./shared/components/tab-toggle/tab-toggle.component";
import { ArticleListComponent } from "./shared/components/article-list/article-list.component";
import { ArticleComponent } from "./shared/components/article/article.component";
import { SignInComponent } from "./features/sign-in/sign-in.component";
import { SignUpComponent } from "./features/sign-up/sign-up.component";
import { EditorComponent } from "./features/editor/editor.component";
import { ArticleFormComponent } from "./features/editor/article-form/article-form.component";
import { EditArticleComponent } from "./features/editor/edit-article/edit-article.component";
import { NewArticleComponent } from "./features/editor/new-article/new-article.component";
import { SettingComponent } from "./features/setting/setting.component";
import { ProfileComponent } from "./features/profile/profile.component";
import { SeoService } from "./shared/services/seo.service";
import { RouterModule } from "@angular/router";


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
    SignUpComponent,
    EditorComponent,
    ArticleFormComponent,
    EditArticleComponent,
    NewArticleComponent,
    SettingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true,
      initialNavigation: 'enabledBlocking',
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
