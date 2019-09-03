import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged = true;
  
  login() {
    this.logged = !this.logged;
  }

  title = 'mp3-angular';
}
