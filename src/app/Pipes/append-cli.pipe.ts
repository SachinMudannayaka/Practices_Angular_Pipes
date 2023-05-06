import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCli'
})
export class AppendCliPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return "His Country is "+value;
  }

}
