import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  // Removed direct use of number pipe in the template

  styleUrls: ['./timer.component.css'],
  providers: [DecimalPipe]
})
export class TimerComponent {
  startTime: number | null = null;
  elapsedTime: number = 0;
  timerInterval: any;

  constructor(private decimalPipe: DecimalPipe) {}

  getFormattedTime(): string {
    return this.decimalPipe.transform(this.elapsedTime / 1000, '1.0-0') + ' seconds';
  }

  // Added method to use in the template


  startTimer() {
    if (!this.startTime) {
      this.startTime = Date.now() - this.elapsedTime;
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime!;
      }, 1000);
    }
  }

  stopTimer() {
    if (this.startTime) {
      clearInterval(this.timerInterval);
      this.startTime = null;
    }
  }
}
