import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLowerCase'
})
export class ToLowerCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {

    return value.toLocaleUpperCase();
  }

}
