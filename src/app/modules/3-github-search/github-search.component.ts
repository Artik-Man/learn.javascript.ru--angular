import { Component, ViewEncapsulation } from '@angular/core';
import { GithubApiService, Repository } from './services/github-api.service';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, BehaviorSubject, of } from 'rxjs';

@Component({
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GithubSearchComponent {
  public total = 0;
  public loading = false;

  public search = new BehaviorSubject<string>('');
  public page = new BehaviorSubject<number>(1);

  public repositories$: Observable<Repository[]> =
    combineLatest<Observable<string>, Observable<number>>(
      this.search.asObservable(),
      this.page.asObservable()
    ).pipe(
      debounceTime(300),
      switchMap(([search, page]) => {
        if (search?.length >= 3) {
          this.loading = true;
          return this.api.search(search, page)
            .pipe(map(resp => {
              this.total = resp.total_count;
              this.loading = false;
              return resp.items;
            }));
        }
        return of([]);
      })
    );

  constructor(private readonly api: GithubApiService) {
  }
}
