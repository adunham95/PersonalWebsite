import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  posts: any;
  author: string;
  content: string;
  title: string;

  constructor(private blogService: BlogService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.getPosts()
  }

  delete(id) {
    this.blogService.deletePosts(id).subscribe(data =>{
      if(data.success){
        this.flashMessage.show(data.msg, {timeout: 5000});
        this.getPosts()
      }
      else{
        this.flashMessage.show(data.msg, {timeout: 5000})
      }
    });
  }

  edit(id){
    console.log("EDIT")
  }

  newPostSubmit(){
    const post = {
      title: this.title,
      author: this.author,
      body: this.content
    };

    this.blogService.savePost(post).subscribe(data =>{
      if(data.success){
        this.flashMessage.show(data.msg, {timeout: 5000});
        this.title = "";
        this.author = "";
        this.content = "";
        this.getPosts();
      }
      else{
        this.flashMessage.show(data.msg, {timeout: 5000})
      }
    });
  }


  getPosts(){
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
