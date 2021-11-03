import {
  Directive,
  HostListener,
  forwardRef,
  Provider,
  Input,
} from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TRIM_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrimValueDirective),
  multi: true,
};

/**
 * 文字入力フォームのためのValueAccessorDirective。
 * 入力中は通常通りの動作で、blurのタイミングでDirective引数に渡した正規表現のパターンをトリミングする。
 * 先頭末尾の空白文字についてはデフォルトでトリミングする。
 * {@link https://https://github.com/khashayar/ng-trim-value-accessor/blob/master/src/trim-value-accessor.ts.com ベース実装}
 */
@Directive({
  selector: `[appTrimValue]`,
  providers: [TRIM_VALUE_ACCESSOR],
})
export class TrimValueDirective extends DefaultValueAccessor {
  /** trimしたいパターンのリスト */
  @Input() appTrimValue?: RegExp[];

  @HostListener('input', ['$event.target.value'])
  ngOnChange = (val: string) => {
    // console.log('change', val);
    let trimmedVal = val;
    if (this.appTrimValue) {
      this.appTrimValue.forEach((pattern) => {
        trimmedVal = trimmedVal.replace(pattern, '');
      });
    }
    this.onChange(trimmedVal.trim());
  };

  @HostListener('blur', ['$event.target.value'])
  ngOnBlur = (val: string) => {
    // console.log('blur', val);
    let trimmedVal = val;
    if (this.appTrimValue) {
      this.appTrimValue.forEach((pattern) => {
        trimmedVal = trimmedVal.replace(pattern, '');
      });
    }
    this.writeValue(trimmedVal.trim());
    this.onTouched();
  };

  writeValue(value: any): void {
    // console.log('writeValue', value);
    if (typeof value === 'string') {
      value = value.trim();
    }

    super.writeValue(value);
  }
}