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
  myProjects;

  constructor(private resume: ResumeService) {
  }

  ngOnInit() {
    this.getMyResume();
    this.getMyProjects();
  }


  getMyResume() {
    console.log('Running getMyResume');
    this.myResume = this.resume.getResume()
  }

  getMyProjects(){
    this.resume.getAllProjects().subscribe(projects =>{
      this.myProjects = projects.projects.reverse();
      console.log(this.myProjects)
    }, err =>{
      console.log(err);
      return false
    })
  }
}
