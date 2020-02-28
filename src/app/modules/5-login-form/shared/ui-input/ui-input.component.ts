import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UiInputComponent,
      multi: true
    }
  ]
})
export class UiInputComponent implements ControlValueAccessor {

  @Input() label: string;

  // Как получить required от FormControl, к которому принадлежит этот инпут?
  @Input() required = false;

  @Input() autocomplete = false;
  @Input() type: 'text' | 'email' | 'password' = 'text';
  public id = Date.now() * Math.random();
  public control = new FormControl('');

  constructor() {
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.control.valueChanges.subscribe(fn);
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  public writeValue(obj: string): void {
    this.control.setValue(obj);
  }
}
