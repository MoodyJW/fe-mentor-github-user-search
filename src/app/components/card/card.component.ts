import { Component, Input, OnInit } from '@angular/core';

import { UsersService, User } from 'src/app/services/users.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  user!: User;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}
}
