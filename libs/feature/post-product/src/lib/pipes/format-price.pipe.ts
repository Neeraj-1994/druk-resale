import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {
  private value: string | number;

  transform(value: string | number, args?: object): string {
    this.value = value;
    return this.format();
  }

  private format = (): string => 'Nu.' + this.value;
}
