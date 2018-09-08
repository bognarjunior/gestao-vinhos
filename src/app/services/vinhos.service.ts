import { Injectable } from '@angular/core';

import { Vinho } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VinhosService {
  constructor() { }

  listar(): Array<Vinho> {
    let vinhos = new Array<Vinho>();
    vinhos.push(
      this.criarVinho(
        1, 
        'Casillero del Diablo', 
        'Cabernet Sauvignon', 
        'Tinto Seco', 
        'Concha y Toro', 
        2010, 
        'Chile'
      )
    );
    vinhos.push(
      this.criarVinho(
        2, 
        'Casillero del Diablo', 
        'Merlot', 
        'Tinto Seco', 
        'Concha y Toro', 
        2015, 
        'Chile'
      )
    );
    return vinhos;
  }

  private criarVinho(
    id: number,
    nome: string,
    uva: string,
    classificacao: string,
    fabricante: string,
    anoSafra: number,
    paisOrigen: string,
  ): Vinho {

    let vinho: Vinho = new Vinho();
    vinho.id = id ;
    vinho.nome = nome ;
    vinho.classificacao = classificacao ;
    vinho.uva = uva ;
    vinho.fabricante = fabricante ;
    vinho.anoSafra = anoSafra ;
    vinho.paisOrigen = paisOrigen ;
    return vinho;
  }
}
