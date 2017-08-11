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

  constructor(private resume: ResumeService) {}

  getMyResume() {
    console.log('Running getMyResume');
    this.myResume = this.resume.getResume()
  }

  ngOnInit() {
    this.getMyResume()
  }
}
