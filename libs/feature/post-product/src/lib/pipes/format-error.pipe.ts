import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'formatError'
})
export class FormatErrorPipe implements PipeTransform {

  transform(control: FormControl): string {
    return control.hasError('required') ? 'This field is required' :
      (control.hasError('validateSpace') ? 'No spaces at the beginning or at the end' :
        (control.hasError('invalidPhone') ? 'Invalid phone number' :
          (control.hasError('email') ? 'Invalid Email' :
            (control.hasError('requiredTrue') ? 'This field is required' :
              (control.hasError('greaterError') ? 'The minimum price should be less than the actual price' :
                (control.hasError('minLength') ? 'Enter atleast 20 characters' :
                  (control.hasError('pattern') ? 'Invalid Email format' : '')))))));
  }

}
