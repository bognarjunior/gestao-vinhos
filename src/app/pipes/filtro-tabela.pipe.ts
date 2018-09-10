import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTabela'
})
export class FiltroTabelaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args !== undefined && args !== '') {
      return value.filter((item: any) => {
        for (const propriedade in item) {
          if ( (item[propriedade].toString()).indexOf(args) !== -1 ) {
            return (item[propriedade].toString()).indexOf(args) !== -1;
          }
        }
      })
    } else {
      return value;
    }
  }

}
