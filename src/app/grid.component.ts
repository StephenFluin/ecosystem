import { Component, Input } from '@angular/core';
import { SearchResults } from './search.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles: []
})
export class GridComponent {
  @Input() results: SearchResults;

  constructor() { }


}
