import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  posts: any;
  author: string;
  content: string;
  title: string;

  user: any;

  constructor(private blogService: BlogService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    const user = this.getUser();
   this.author = user.name
  }

  newPostSubmit(){
    const post = {
      title: this.title,
      author: this.author,
      body: this.content
    };

    this.blogService.savePost(post).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('This message has been added to drafts', {cssClass: 'alert-success', timeout: 5000});
        this.title = "";
        this.author = "";
        this.content = "";
      }
      else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-error', timeout: 5000})
      }
    });
  }

  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    return user
  }


}
