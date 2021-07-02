import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exCustomPipes'
})
export class ExCustomPipesPipe implements PipeTransform {

  transform(val : number) : number {
    return Math.sqrt(val);
 }  

}
