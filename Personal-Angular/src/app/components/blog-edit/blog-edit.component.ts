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

  delete(id){
    this.blogService.deletePosts(id).subscribe(data =>{
      if (data.success){
        console.log(data.msg)
      }
      else {
        console.log(data.msg)
      }
    })
  }

  update(){
    console.log(this.selectedPost);
    this.blogService.updatePost(this.selectedPost._id, this.selectedPost.title, this.selectedPost.production, this.selectedPost.body).subscribe(data =>{
      console.log(data)
    });
  }

}
