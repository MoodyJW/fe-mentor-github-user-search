import { Component } from '@angular/core';
import { User } from './models/user.model';
import { DEFAULT_USER } from './constants/default-user.constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = 'dark-theme';
  user: User = DEFAULT_USER;

  toggleTheme(currentTheme: string) {
    this.theme = currentTheme;
  }

  userReturned(user: any) {
    this.user = user;
  }
}
