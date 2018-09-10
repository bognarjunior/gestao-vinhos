import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTabela'
})
export class FiltroTabelaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
