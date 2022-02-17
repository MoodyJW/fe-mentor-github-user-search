import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() userReturned = new EventEmitter<User>();
  searchValue = new FormControl('', Validators.required);
  buttonColor = 'var(--button-bg)';
  noResults = false;
  unsubscribe$ = new Subject();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  onFocus(): void {
    this.buttonColor = 'var(--button-hover-bg)';
  }

  onBlur(): void {
    this.buttonColor = 'var(--button-bg)';
  }

  searchUser(): void {
    this.usersService
      .getUser(this.searchValue.value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (user: User) => {
          this.noResults = false;
          console.log(user);
          this.userReturned.emit(user);
        },
        (error) => (this.noResults = error)
      );
  }
}
