import { Component, OnInit } from '@angular/core';
import { Data } from './data.service';
import { Observable } from 'rxjs';


export interface SearchResult {
  name: string;
  description: string;
  package: string;
  bundleSize: string;
  accessible: boolean;
  ngAdd: string;
  ngUpdate: boolean;
}

export interface SearchResults {
  query: string;
  results: SearchResult[];
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  results: Observable<SearchResults>;

  constructor(private data: Data) { }

  search(query: string) {
    this.results =  this.data.search(query);
  }

}
