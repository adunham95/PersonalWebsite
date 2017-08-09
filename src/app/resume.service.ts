import { Injectable } from '@angular/core';
import { Http, Response,} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResumeService {

  handleError;

  constructor(private http: Http) {

  }

  getResume(): Observable<any> {
    console.log("in resume service");
    // get users from api
    return this.http.get('assets/resume.json')//, options)
      .map((response: Response) => {
          console.log("in resume service");
          console.log("mock data" + response);
          return response;
        }
      )
      .catch(this.handleError);
  }

}
