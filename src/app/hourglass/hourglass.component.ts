import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hourglass',
  templateUrl: './hourglass.component.html',
  styleUrls: ['./hourglass.component.css']
})
export class HourglassComponent implements OnInit {
  @Input() duration: number = 60; // duration in seconds
  @ViewChild('sandTop') sandTopRef!: ElementRef;
  @ViewChild('sandBottom') sandBottomRef!: ElementRef;

  ngOnInit(): void {
    setTimeout(() => {
      if (this.sandTopRef && this.sandBottomRef) {
        this.sandTopRef.nativeElement.style.animationDuration = `${this.duration}s`;
        this.sandBottomRef.nativeElement.style.animationDuration = `${this.duration}s`;
      }
    });
  }
}