import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
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
    AppComponent,
    TimerComponent,
    HourglassComponent,
    ProgressBarComponent,
    SummaryComponent,
    CurrentSituationComponent,
    SearchFilterComponent
  ],
  providers: [],
})
export class AppModule { }
