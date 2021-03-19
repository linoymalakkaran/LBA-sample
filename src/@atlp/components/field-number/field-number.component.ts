import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'field-number',
  templateUrl: './field-number.component.html',
  styleUrls: ['./field-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldNumberComponent),
      multi: true
    }
  ]
})

export class FieldNumberComponent implements OnInit, ControlValueAccessor {
  // @input
  @Input() min: number;
  @Input() max: number;

  // Public
  public disabled = false;
  public value = 0;
  public onChange: any = () => { };
  public onTouched: any = () => { };

  /**
   * Constructor
   */
  constructor() { }

  ngOnInit(): void { }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  
  public increase() {
    if (typeof this.max === 'undefined') {
      this.value++;
      this.onChange(this.value);
    } else if (this.value < this.max) {
      this.value++;
      this.onChange(this.value);
    }
  }

  public decrease() {
    if (typeof this.min === 'undefined') {
      this.value--;
      this.onChange(this.value);
    } else if (this.value > this.min) {
      this.value--;
      this.onChange(this.value);
    }
  }

  public writeValue(value: number): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
