import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input('project') project;

  constructor() { }

  ngOnInit() {
  }

}
