import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-realworld';
  isDarkTheme: boolean = false;

  toggleTheme() {
    console.log('Toggle theme');
    this.isDarkTheme = !this.isDarkTheme;
    console.log(this.isDarkTheme);
  }
}
