import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {FlashMessagesModule} from "angular2-flash-messages"

//Routing
import { RouterModule, Routes } from '@angular/router';
//Services
import {BlogService} from "./services/blog.service";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {ValidateService} from "./services/validate.service";

//Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NoPageComponent } from './views/no-page/no-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { BlogPageComponent } from './views/blog-page/blog-page.component';
import { ProjectPageComponent } from './views/project-page/project-page.component';
import { ElementBlockComponent } from './components/element-block/element-block.component';
import { ElementContactComponent } from './components/element-contact/element-contact.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import {DashboardPageComponent} from "./views/dashboard-page/dashboard-page.component";
import { LoginPageComponent } from './views/login-page/login-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardDisplayComponent } from './components/dashboard-display/dashboard-display.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ProjectCreateComponent } from './components/project-create/project-create.component'

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'blog', component: BlogPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'project', component: ProjectPageComponent},
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardDisplayComponent},
      {path: 'editpost', component: BlogEditComponent},
    ]
  },
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
    ProjectCardComponent,
    BlogCardComponent,
    BlogCreateComponent,
    DashboardPageComponent,
    LoginPageComponent,
    NavBarComponent,
    DashboardDisplayComponent,
    BlogEditComponent,
    TruncatePipe,
    ProjectCreateComponent
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
  providers: [BlogService, AuthService, AuthGuard, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
