import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../services/github-api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent {
  @Input() repositories$: Observable<Repository[]>;
  @Input() value$: Observable<string>;
  @Input() loading: boolean;
  @Input() total: number;
  @Input() page = 1;
  @Output() pageChange = new EventEmitter<number>();

  public next(page: PageEvent): void {
    console.log(page);
    this.pageChange.next(page.pageIndex);
  }
}
