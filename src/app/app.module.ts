import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClimberComponent } from './components/climber/climber.component';
import { SessionComponent } from './components/session/session.component';


@NgModule({
  declarations: [
    AppComponent,
    ClimberComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
