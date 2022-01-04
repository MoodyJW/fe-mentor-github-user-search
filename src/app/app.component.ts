import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = 'dark-theme';

  toggleTheme(currentTheme: string) {
    this.theme = currentTheme;
  }
}
