import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { User, UserLinks, UserStats, UserInfo } from '../../models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnChanges {
  @Input() user!: User;
  userLinks!: UserLinks;
  userStats!: UserStats;
  userInfo!: UserInfo;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user && changes.user.currentValue) {
      this.userLinks = {
        location: this.user.location,
        blog: this.user.blog,
        twitterUsername: this.user.twitter_username,
        company: this.user.company,
      };
      this.userStats = {
        publicRepos: this.user.public_repos,
        following: this.user.following,
        followers: this.user.followers,
      };
      this.userInfo = {
        avatarUrl: this.user.avatar_url,
        name: this.user.name,
        htmlUrl: this.user.html_url,
        login: this.user.login,
        createdAt: this.user.created_at,
        bio: this.user.bio,
      };
    }
  }
}
