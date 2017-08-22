import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service"

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  posts: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(posts =>{
      console.log(posts);
      this.posts = posts.posts;
      console.log(this.posts)
    }, err =>{
      console.log(err);
      return false
    });
  }

}
