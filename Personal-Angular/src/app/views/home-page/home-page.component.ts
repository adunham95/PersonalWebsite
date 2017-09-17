import { Component, OnInit } from '@angular/core';
import {ResumeService} from "../../services/resume.service";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ResumeService]
})
export class HomePageComponent implements OnInit {

  myResume;
  myBlog;
  myProject;

  constructor(private resume: ResumeService, private blogService: BlogService) {}

  getMyResume() {
    this.myResume = this.resume.getResume()
  }

  getMyBlog() {
    this.blogService.getPublishedPosts().subscribe(posts =>{
      console.log(posts);
      this.myBlog = posts.posts;
      console.log(this.myBlog)
    }, err =>{
      console.log(err);
      return false
    });
  }

  getMyProjects(){
    this.resume.getAllProjects().subscribe(projects =>{
      this.myProject = projects.projects.reverse();
      console.log(this.myProject)
    }, err =>{
      console.log(err);
      return false
    })
  }

  ngOnInit() {
    this.getMyProjects();
    this.getMyResume();
    this.getMyBlog();
  }
}
