import { Injectable } from '@angular/core';
import { SearchResults, SearchResult } from './search.component';

@Injectable({
  providedIn: 'root'
})
export class Data {
  curatedComponents: SearchResult[] = [
    {name: 'Angular Material Button', package: '@angular/material', ngAdd: 'ng add @angular/material', ngUpdate: true, accessible: true, description: 'Angular Material Button', bundleSize: null},
    {name: 'CDK Table', package: '@angular/cdk', ngAdd: null, ngUpdate: true, accessible: true, description: 'Angular CDK Data Table', bundleSize: null},
  ]

  constructor() { }
  search(query: string): SearchResults {
    const regex = new RegExp(query, 'i');
    const clientSearch = this.curatedComponents.filter(item => item.name.search(regex) !== -1 || item.description.search(regex) !== -1);
    return { query: query, results: clientSearch };
  }

}
