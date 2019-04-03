import { Injectable } from '@angular/core';
import { SearchResults, SearchResult } from './search.component';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Data {
  components: Observable<SearchResult[]>;
  refresh = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.components = this.refresh.pipe(switchMap(() => http.get<SearchResult[]>('/api/components')), shareReplay(1));
  }

  search(query: string): Observable<SearchResults> {
    const regex = new RegExp(query, 'i');
    return this.components.pipe(
      map(list => {
        let searchResults: SearchResults = {
          query: query,
          results: list.filter(item => item.name.search(regex) !== -1 || item.description.search(regex) !== -1),
        };
        return searchResults;
      }
      )
    );
  }

  saveComponent(component) {
    this.http.put(`/api/components/${component.id}`, component).subscribe(() => { });
  }
  createComponent(component) {
    this.http.post('/api/components', component).subscribe(() => { });
  }

}
