import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  buttonColor = 'var(--button-bg)';
  constructor() {}

  ngOnInit(): void {}

  onFocus(): void {
    this.buttonColor = 'var(--button-hover-bg)';
  }

  onBlur(): void {
    this.buttonColor = 'var(--button-bg)';
  }
}
