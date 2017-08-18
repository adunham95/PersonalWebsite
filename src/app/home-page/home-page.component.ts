import { Component, OnInit } from '@angular/core';
import {ResumeService} from "../resume.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ResumeService]
})
export class HomePageComponent implements OnInit {

  myResume;
  myBlog;

  constructor(private resume: ResumeService) {}

  getMyResume() {
    this.myResume = this.resume.getResume()
  }

  getMyBlog() {
    this.myBlog = this.resume.getBlog()
  }

  ngOnInit() {
    this.getMyResume()
    this.getMyBlog()
  }
}
