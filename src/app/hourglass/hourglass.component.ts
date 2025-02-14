import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hourglass',
  templateUrl: './hourglass.component.html',
  styleUrls: ['./hourglass.component.css']
})
export class HourglassComponent implements OnChanges {
  @Input() duration: number = 60; // Duration in seconds (60 seconds)
  @Input() isRunning: boolean = false; // Controlled by parent component
  animationDuration: string = '60s'; // Default to 60 seconds

  ngOnChanges(changes: SimpleChanges) {
    if (changes['duration']) {
      this.animationDuration = `${this.duration}s`;
    }
  }
}