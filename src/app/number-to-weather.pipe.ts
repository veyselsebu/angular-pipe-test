import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWeather'
})
export class NumberToWeatherPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 0:
      value="veysel";
      break
      case 1:
      value="yagmur";
      break;

      default:
      value=value;

    }
    return value;
  }

}
