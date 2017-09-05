import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  posts: any;
  selectedPost: any;

  constructor( private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAllPosts().subscribe(posts =>{
      console.log(posts);
      this.posts = posts.posts.reverse();
      console.log(this.posts)
    }, err =>{
      console.log(err);
      return false
    });
  }


}
