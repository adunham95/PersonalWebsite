import { Component, OnInit } from '@angular/core';
import {ResumeService} from "../resume.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  providers: [ResumeService]
})
export class AboutPageComponent implements OnInit {

  myResume;

  constructor(private resume: ResumeService) {}

  getMyResume() {
    console.log('Running getMyResume');
    this.resume.getResume()
  }

  ngOnInit() {
    this.getMyResume()
  }

}
