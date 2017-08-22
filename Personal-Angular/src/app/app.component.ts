import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adrian Dunham';

  /* Open */
  openNav() {
    document.getElementById("navigation").style.height = "100%";
  }

  /* Close */
  closeNav() {
    document.getElementById("navigation").style.height = "0%";
  }

  expand() {
    console.log("Expanded");

    document.getElementById('navigation').setAttribute("style", "height: 100%, visibility: visible");
  }

}
