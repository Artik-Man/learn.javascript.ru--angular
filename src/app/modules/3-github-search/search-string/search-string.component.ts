import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-string',
  templateUrl: './search-string.component.html',
  styleUrls: ['./search-string.component.scss']
})
export class SearchStringComponent implements OnDestroy {
  @Input() loading: boolean;
  @Output() value = new EventEmitter<string>();
  public search = new FormControl('');
  private subscription: Subscription;

  constructor() {
    this.subscription = this.search.valueChanges.subscribe(val => {
      this.value.emit(val);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public clear() {
    this.search.setValue('');
  }
}
