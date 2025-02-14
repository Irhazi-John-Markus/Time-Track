import { Component, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourglassComponent } from '../hourglass/hourglass.component';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  imports: [HourglassComponent]
})
export class TimerComponent {
  startTime: number | null = null;
  elapsedTime: number = 0;
  timerInterval: any;
  progress: number = 0;
  duration: number = 60; // 60 seconds
  isRunning: boolean = false;
  @Output() timerStarted = new EventEmitter<void>();
  @Output() timerStopped = new EventEmitter<void>();
  @Output() progressChange = new EventEmitter<number>();



  startTimer() {
    if (!this.startTime) {
      this.startTime = Date.now() - this.elapsedTime;
      this.isRunning = true;
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime!;
        this.progress = (this.elapsedTime / (this.duration * 1000)) * 100; // Progress for 60 seconds
        this.progressChange.emit(this.progress);

      }, 1000);
      this.timerStarted.emit();
    }
  }


  stopTimer() {
    if (this.startTime) {
      clearInterval(this.timerInterval);
      this.startTime = null;
      this.isRunning = false;
      this.timerStopped.emit();
    }
  }


  getFormattedTime(): string {
    return (this.elapsedTime / 1000).toFixed(0) + ' seconds';
  }
}
