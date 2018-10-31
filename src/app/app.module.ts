import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import{RouterModule,Routes}from'@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'news', component: NewsComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
