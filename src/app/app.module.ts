import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import {
  MdToolbarModule, MdSidenavModule, MdButtonModule, MdIconModule, MdListModule,
  MdCardModule
} from "@angular/material"
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const appRoutes: Routes = [
  { path: '**', component: NoPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'blog', component: BlogPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NoPageComponent,
    AboutPageComponent,
    BlogPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
