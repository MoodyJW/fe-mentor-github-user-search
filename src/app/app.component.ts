import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light-theme'
    : 'dark-theme';
  user!: User;

  constructor(private usersService: UsersService) {
    this.usersService
      .getUser('octocat')
      .pipe(first())
      .subscribe((user) => {
        this.user = user;
      });
  }

  toggleTheme(currentTheme: string) {
    this.theme = currentTheme;
  }

  userReturned(user: any) {
    this.user = user;
  }
}
