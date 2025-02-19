import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { HourglassComponent } from './hourglass/hourglass.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SummaryComponent } from './summary/summary.component';
import { CurrentSituationComponent } from './current-situation/current-situation.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatIconModule,
    ProgressBarComponent,
    CurrentSituationComponent,
    AppComponent,
    TimerComponent,
    HourglassComponent
  ],
  providers: [],
})
export class AppModule { 
  applyFilter(value: string | null) {
    if (value !== null) {
      // your code here
    }
  }

  applyDateFilter(event: { value: any }) {
    const value = event.value;
    if (value) {
      // your code here
    }
  }

  applyStatusFilter(event: { value: any }) {
    const value = event.value;
    if (value) {
      // your code here
    }
  }
}
