import { Component, ViewEncapsulation } from '@angular/core';
import { GithubApiService, Repository } from './services/github-api.service';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { Observable, combineLatest, BehaviorSubject, of } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GithubSearchComponent {
  public title = 'Github Search';

  public total = 0;
  public loading = false;

  public search = new BehaviorSubject<string>('');
  public page = new BehaviorSubject<number>(1);

  public repositories$: Observable<Repository[]> =
    combineLatest<Observable<string>, Observable<number>>(
      this.search.pipe(
        map(x => x.trim()),
        filter(x => x?.length > 3),
        tap(() => {
          this.page.next(1);
        })
      ),
      this.page
    ).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        this.loading = true;
      }),
      switchMap(([search, page]) =>
        this.api.search(search, page)
          .pipe(
            map(resp => {
              this.total = resp.total_count;
              return resp.items;
            }),
            tap(() => {
              this.loading = false;
            }),
            catchError(() => {
              this.loading = false;
              return of([]);
            })
          )
      )
    );

  constructor(
    private readonly api: GithubApiService,
    private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
