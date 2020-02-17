import { Component, ViewEncapsulation } from '@angular/core';
import { GithubApiService, Repository } from './services/github-api.service';
import { FormControl } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GithubSearchComponent {
  public total = 0;
  public page = new Subject<number>();
  public search = new FormControl('');
  public repositories$: Observable<Repository[]> =
    this.search.valueChanges
      // forkJoin? merge?
      .pipe(
        debounceTime(300),
        switchMap(value => {
          const [query, page] = value;
          if (value.length >= 3) {
            return this.api.search(query, page).pipe(map(resp => {
              this.total = resp.total_count;
              return resp.items;
            }));
          } else {
            return of([]);
          }
        })
      );

  constructor(private readonly api: GithubApiService) {
    this.page.next(1);
  }

  public clear() {
    this.search.setValue('');
  }

  public setPage(page: PageEvent) {
    this.page.next(page.pageIndex);
  }
}
