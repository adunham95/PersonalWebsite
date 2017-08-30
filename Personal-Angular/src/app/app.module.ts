import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {FlashMessagesModule} from "angular2-flash-messages"

//Routing
import { RouterModule, Routes } from '@angular/router';
//Services
import {BlogService} from "./services/blog.service"

//Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NoPageComponent } from './views/no-page/no-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { BlogPageComponent } from './views/blog-page/blog-page.component';
import { ProjectPageComponent } from './views/project-page/project-page.component';
import { ElementBlockComponent } from './components/element-block/element-block.component';
import { ElementContactComponent } from './components/element-contact/element-contact.component';
import { ConstructionPageComponent } from './views/construction-page/construction-page.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { NewpostPageComponent } from './views/newpost-page/newpost-page.component';
import {DashboardPageComponent} from "./views/dashboard-page/dashboard-page.component"

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'blog', component: BlogPageComponent},
  { path: 'dashboard', component: DashboardPageComponent},
  { path: 'project', component: ProjectPageComponent},
  { path: 'construction', component: ConstructionPageComponent},
  { path: '**', component: NoPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NoPageComponent,
    AboutPageComponent,
    BlogPageComponent,
    ProjectPageComponent,
    ElementBlockComponent,
    ElementContactComponent,
    ConstructionPageComponent,
    ProjectCardComponent,
    BlogCardComponent,
    BlogCreateComponent,
    NewpostPageComponent,
    DashboardPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
