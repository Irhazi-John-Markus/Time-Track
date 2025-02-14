// filepath: /c:/Users/joirhazi/OneDrive - NTT DATA EMEAL/Desktop/Time-Track/src/app/timer/timer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  startTime: number | null = null;
  elapsedTime: number = 0;
  timerInterval: any;
  progress: number = 0;

  startTimer() {
    if (!this.startTime) {
      this.startTime = Date.now() - this.elapsedTime;
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime!;
        this.progress = (this.elapsedTime / (2 * 60 * 60 * 1000)) * 100; // Progress for 2 hours
      }, 1000);
    }
  }

  stopTimer() {
    if (this.startTime) {
      clearInterval(this.timerInterval);
      this.startTime = null;
    }
  }

  getFormattedTime(): string {
    return (this.elapsedTime / 1000).toFixed(0) + ' seconds';
  }
}