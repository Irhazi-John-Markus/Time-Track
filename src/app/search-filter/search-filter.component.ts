import { Component, EventEmitter, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatDatepicker } from '@angular/material/datepicker';
@Component({
  imports: [MatFormField,
    MatLabel, 
    MatDatepicker,
    MatOptionModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  @Output() filterChange = new EventEmitter<{ search: string, date: Date, status: string }>();

  search: string = '';
  date: Date | null = null;
  status: string = 'all';

  applyFilter(search: string) {
    this.search = search;
    this.emitFilterChange();
  }

  applyDateFilter(date: Date) {
    this.date = date;
    this.emitFilterChange();
  }

  applyStatusFilter(status: string) {
    this.status = status;
    this.emitFilterChange();
  }

  emitFilterChange() {
    this.filterChange.emit({ search: this.search, date: this.date ?? new Date(), status: this.status });
  }
}
