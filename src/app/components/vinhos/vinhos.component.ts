import { Component, OnInit } from '@angular/core';
import { Vinho } from './../../models/vinho';

@Component({
  selector: 'app-vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  constructor() { }

  ngOnInit() {
    this.vinhos = new Array<Vinho>();
    this.vinhos.push(
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
    this.vinhos.push(
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
