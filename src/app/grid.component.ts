import { Component, Input } from '@angular/core';
import { SearchResults } from './search.component';
import { query } from '@angular/animations';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles: []
})
export class GridComponent {
  @Input() results: SearchResults;
  @Input() query: string;

  constructor() { }


}
