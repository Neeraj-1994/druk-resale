import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCategory'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, category?: any[]): string {
    let returnValue: string;
    category.forEach(item => {
      if (value === item.value) {
        returnValue =  item.label;
      }
    });
    return returnValue;
  }
}
