import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
        if (data.success){

          console.log('Logged In');
          console.log(data)
        }
        else {
          console.log('User not logged in')
        }
      }
    )
  }

}
