import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CurrentSituationComponent } from "../current-situation/current-situation.component";

@Component({
  selector: 'app-summary',
  imports: [MatTabsModule, CurrentSituationComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

}
