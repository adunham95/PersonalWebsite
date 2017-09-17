import { Component, OnInit } from '@angular/core';
import {ResumeService} from "../../services/resume.service";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  projects: any;
  selectedProject:  any;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getProjects()
  }

  getProjects(){
    this.resumeService.getAllProjects().subscribe(projects => {
      console.log(projects);
      // this.projects = projects.projects
    }, err =>{
      console.log(err);
      return false;
    })
  }
}
