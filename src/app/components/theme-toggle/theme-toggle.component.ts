import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  @Output() themeToggled = new EventEmitter<string>();
  currentTheme = window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light-theme'
    : 'dark-theme';

  toggleTheme() {
    this.currentTheme =
      this.currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    this.themeToggled.emit(this.currentTheme);
  }
}
