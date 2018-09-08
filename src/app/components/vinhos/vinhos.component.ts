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
    this.vinhos.push();
  }

  private criarVinho(
    id: number,
    nome: string,
    classificacao: string,
    uva: string,
    fabricante: string,
    paisOrigen: string,
    anoSafra: number,
  ): Vinho {
    
    let vinho: Vinho = new Vinho();
    vinho.id = id ;
    vinho.nome = nome ;
    vinho.classificacao = classificacao ;
    vinho.uva = uva ;
    vinho.fabricante = fabricante ;
    vinho.paisOrigen = paisOrigen ;
    vinho.anoSafra = anoSafra ;
    return vinho;
  }

}
