import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input('blog') blog;

  constructor() { }

  ngOnInit() {
  }

}
