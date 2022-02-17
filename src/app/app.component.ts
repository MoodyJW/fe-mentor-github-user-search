import { Component } from '@angular/core';
import { User } from 'src/app/services/users.service';

export const DEFAULT_USER = {
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
  blog: 'https://github.blog',
  company: '@github',
  created_at: '2011-01-25T18:44:36Z',
  email: '',
  events_url: 'https://api.github.com/users/octocat/events{/privacy}',
  followers: 4921,
  followers_url: 'https://api.github.com/users/octocat/followers',
  following: 9,
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
  gravatar_id: '',
  hireable: false,
  html_url: 'https://github.com/octocat',
  id: 583231,
  location: 'San Francisco',
  login: 'octocat',
  name: 'The Octocat',
  node_id: 'MDQ6VXNlcjU4MzIzMQ==',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  public_gists: 8,
  public_repos: 8,
  received_events_url: 'https://api.github.com/users/octocat/received_events',
  repos_url: 'https://api.github.com/users/octocat/repos',
  site_admin: false,
  starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
  twitter_username: '',
  type: 'User',
  updated_at: '2022-01-24T15:08:43Z',
  url: 'https://api.github.com/users/octocat',
};
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
