import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adrian Dunham';

  private auth: AuthService;
  /* Open */
  openNav() {
    document.getElementById("navigation").style.height = "100%";
  }

  /* Close */
  closeNav() {
    document.getElementById("navigation").style.height = "0%";
  }

}
