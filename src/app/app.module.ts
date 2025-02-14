import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { HourglassComponent } from './hourglass/hourglass.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ProgressBarComponent,
    HourglassComponent,
    TimerComponent,
    AppComponent
  ],
  providers: []
})
export class AppModule { }
