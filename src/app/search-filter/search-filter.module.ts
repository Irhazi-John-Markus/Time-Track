import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

  @NgModule({
    imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatSelectModule,
      MatOptionModule,
      SearchFilterComponent
    ]
    })
  export class SearchFilterModule { }