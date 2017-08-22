import { Component, OnInit } from '@angular/core';
import { BlogService} from "../../services/blog.service";
import {FlashMessagesService} from "angular2-flash-messages"

@Component({
  selector: 'app-newpost-page',
  templateUrl: './newpost-page.component.html',
  styleUrls: ['./newpost-page.component.css']
})
export class NewpostPageComponent implements OnInit {

  title: String;
  author: String;
  body: String;

  constructor(private blogService: BlogService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  newPostSubmit(){
    const post = {
      title: this.title,
      author: this.author,
      body: this.body
    };

    this.blogService.savePost(post).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('Added post', {timeout: 5000})
      }
      else{
        this.flashMessage.show('Error adding post', {timeout: 5000})
      }
    });
  }
}
