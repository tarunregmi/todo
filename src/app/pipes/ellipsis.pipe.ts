import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  // by default return ellipsis text when it containg more than 7 word
  transform(value: string, words: number = 7): string {
    let line = value.split(' ');

    if (line.length < words) return value;

    line.length = words;
    return (line.join(' ') + '……');
  }

}
