import { Component } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { HourglassComponent } from './hourglass/hourglass.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@Component({
  selector: 'app-root',
  imports: [ 
    TimerComponent,
    HourglassComponent,
    ProgressBarComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Time-Track';
}

