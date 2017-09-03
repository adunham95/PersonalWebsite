import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = 'Adrian Dunham';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /* Open */
  openNav() {
    document.getElementById("navigation").style.height = "100%";
  }

  /* Close */
  closeNav() {
    document.getElementById("navigation").style.height = "0%";
  }

  onLogoutClick(){
    document.getElementById("navigation").style.height = "0%";
    this.authService.logout();
  }

}
