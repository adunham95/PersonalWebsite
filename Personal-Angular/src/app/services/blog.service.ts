import { Injectable } from '@angular/core';
import {Http,  Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class BlogService {

  posts: any;

  constructor(private http: Http) { }

  savePost(post){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //Testing
    // return this.http.post('http://localhost:8080/posts/savepost', post, {headers: headers}).map(res => res.json())
    //Prod
    return this.http.post('posts/savepost', post, {headers: headers}).map(res => res.json())
  }

  getPosts(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //Testing
    // return this.http.get('http://localhost:8080/posts/getposts', {headers: headers}).map(res => res.json());
    //Production
    return this.http.get('posts/getposts', {headers: headers}).map(res => res.json())
  }

  deletePosts(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //Testing
    // return this.http.post('http://localhost:8080/posts/deletepost', {_id: id}, {headers: headers}).map(res => res.json())
    //Production
    return this.http.post('posts/deletepost', {_id: id}, {headers: headers}).map(res => res.json())
  }


}
