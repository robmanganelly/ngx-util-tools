import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fragment'
})
export class FragmentPipe implements PipeTransform {

  transform(value: string, ...args: (number | string)[]): string {

    const rangeLimit = !args[0] ?
      value.length :
      !Number(args[0]) ? value.length : Number(args[0]) ;

    if (rangeLimit < 1){
      throw Error(`invalid value ${args[0]}. Values can't be less than 1`)
    }

    const fragment = value.split('').slice(0,rangeLimit).join('');

    return   fragment.length < value.length ?
       fragment + '...' : fragment;

  }

}
