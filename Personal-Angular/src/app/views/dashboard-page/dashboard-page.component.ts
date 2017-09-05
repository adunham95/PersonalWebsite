import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
