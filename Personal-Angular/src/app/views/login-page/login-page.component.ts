import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {ValidateService} from "../../services/validate.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  //Login
  username: String;
  password: String;

  //Register
  usernameRegister : String;
  passwordRegister: String;
  nameRegister: String;
  emailRegister: String;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private validateService: ValidateService
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
          this.flashMessage.show(data.msg, {cssClass: 'alert-success',timeout: 3000});
          this.authService.storeUserData(data.token, data.user);
          this.router.navigate(['dashboard']);
        }
        else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-error',timeout: 10000000});
        }
      }
    )
  }

  onRegisterUser(){
      const user = {
        name: this.nameRegister,
        email: this.emailRegister,
        username: this.usernameRegister,
        password: this.passwordRegister
      };

      // Required Feild
      if(!this.validateService.validateRegister(user)){
        this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-error', timeout: 3000});
        return false
      }

      // Validate Email
      if(!this.validateService.validateEmail(user.email)){
        this.flashMessage.show('Please use a valid email', {cssClass: 'alert-error', timeout: 3000});
        return false
      }

      // Register User
      this.authService.registerUser(user).subscribe(data => {
        if(data.success){
          this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
          this.passwordRegister = '';
          this.emailRegister = '';
          this.nameRegister = '';
          this.usernameRegister = '';
          this.router.navigate(['/login']);
        }
        else {
          this.flashMessage.show('Something went wrong', {cssClass: 'alert-error', timeout: 3000});
          this.router.navigate(['/register']);
        }
      });

  }

}
