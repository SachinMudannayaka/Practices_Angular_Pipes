import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeArguement'
})
export class PipeArguementPipe implements PipeTransform {

  transform(value: string, lenght: number): unknown {
    return value.substring(0,lenght);
  }

}
