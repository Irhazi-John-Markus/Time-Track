import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { HourglassComponent } from './hourglass/hourglass.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
})
export class AppModule { }
