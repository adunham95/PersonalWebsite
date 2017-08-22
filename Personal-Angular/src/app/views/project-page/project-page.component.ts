import { Component, OnInit } from '@angular/core';
import {ResumeService} from "../../services/resume.service";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  providers: [ResumeService]
})
export class ProjectPageComponent implements OnInit {

  myResume;

  constructor(private resume: ResumeService) { }

  getMyResume() {
    console.log('Running getMyResume');
    this.myResume = this.resume.getResume()
  }

  ngOnInit() {
    this.getMyResume()
  }

}
