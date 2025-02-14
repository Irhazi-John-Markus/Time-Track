import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() duration: number = 60; 
  progress: number = 0;

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.progress += 100 / (this.duration * 10);
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
      }
    }, 100);
  }
}