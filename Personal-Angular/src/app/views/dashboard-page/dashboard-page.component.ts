import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  posts: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts()
  }

  delete(id) {
    this.blogService.deletePosts(id).subscribe(data =>{
      if(data.success){
        console.log(data.msg)
        this.getPosts()
      }
      else{
        console.log(data.msg)
      }
    });
  }

  edit(id){
    console.log("EDIT")
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
