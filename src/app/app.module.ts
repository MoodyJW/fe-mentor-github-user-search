import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ThemeToggleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
