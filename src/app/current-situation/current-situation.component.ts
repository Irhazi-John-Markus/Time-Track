import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from "../search-filter/search-filter.component";


@Component({
  selector: 'app-current-situation',
  templateUrl: './current-situation.component.html',
  styleUrls: ['./current-situation.component.css'],
  imports: [CommonModule, SearchFilterComponent]
})
export class CurrentSituationComponent {
  results: any[] = []; 

  applyFilter(filter: { search: string, date: Date, status: string }) {
    this.results = this.results.filter(item => {
      return (filter.search ? item.name.includes(filter.search) : true) &&
             (filter.date ? new Date(item.date).toDateString() === filter.date.toDateString() : true) &&
             (filter.status !== 'all' ? item.status === filter.status : true);
    });
  }
}
