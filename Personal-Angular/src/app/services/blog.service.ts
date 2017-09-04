import { Injectable } from '@angular/core';
import {Http,  Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class BlogService {

  posts: any;
  isProd: boolean;

  constructor(private http: Http) {
    this.isProd = false
  }

  getEndpoint(ep){
    if(this.isProd){
      return ep
    }
    else {
      return 'http://localhost:8080/'+ep
    }
  };

  savePost(post){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let endPoint = this.getEndpoint('posts/savepost');
    return this.http.post(endPoint, post, {headers: headers}).map(res => res.json())
  }

  getPosts(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let endPoint = this.getEndpoint('posts/getposts');
    return this.http.get(endPoint, {headers: headers}).map(res => res.json())
  }

  deletePosts(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let endPoint = this.getEndpoint('posts/deletepost');
    return this.http.post(endPoint, {_id: id}, {headers: headers}).map(res => res.json())
  }


}
