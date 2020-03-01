import { ChangeDetectionStrategy, Component, Injector, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UiInputComponent,
      multi: true
    }
  ]
})
export class UiInputComponent implements OnChanges, OnInit, ControlValueAccessor {

  @Input() flyingLabel = '';
  @Input() required: boolean;
  @Input() autocomplete: boolean;
  @Input() type: 'text' | 'email' | 'password' = 'text';

  public control = new FormControl();
  public name: string;

  constructor(private injector: Injector) {
  }

  public ngOnInit(): void {
    const ngControl = this.injector.get(NgControl);

    setTimeout(() => {
      this.control = ngControl.control as FormControl;
      this.required = this.required || hasRequiredField(this.control);
    }, 0);

  }

  public ngOnChanges(): void {
    this.required = this.required !== undefined;
    this.autocomplete = this.autocomplete !== undefined;
    this.name = this.generateName();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.control?.valueChanges.subscribe(fn);
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control?.disable();
    } else {
      this.control?.enable();
    }
  }

  public writeValue(obj: string): void {
    this.control?.setValue(obj);
  }

  public generateName() {
    return this.flyingLabel.toLowerCase().replace(/\s/, '');
  }
}

export const hasRequiredField = (abstractControl: AbstractControl): boolean => {
  if (abstractControl?.validator) {
    const validator = abstractControl.validator({} as AbstractControl);
    if (validator && validator.required) {
      return true;
    }
  }
  return false;
};
