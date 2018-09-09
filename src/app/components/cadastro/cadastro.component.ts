import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vinho } from '../../models';
import { VinhosService } from '../../services';

@Component({
  selector: 'cadastrar-vinho',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  vinho: Vinho;
  uvas: Array<string>;
  classificacoes: Array<string>;

  constructor(
    private router: Router,
    private vinhosService: VinhosService
  ) { }

  ngOnInit() {
    this.initValues();
  }

  private initValues(): void {
    
    this.vinho = new Vinho();

    this.uvas = [
      'Cabernet Sauvignon', 
      'Merlot', 
      'Carmenére', 
      'Syrah'
    ];

    this.classificacoes = [
      'Tinto Seco',
      'Tinto Suave',
      'Branco Seco',
      'Branco Suave',
      'Verde Seco',
      'Verde Suave'
    ];
  }

  salvar(): void {
    this.vinhosService.cadastrar(this.vinho)
    .subscribe(response => {
      console.log(JSON.stringify(response)); 
      alert("Vinho cadastrado com sucesso");
      this.router.navigate(['/listar']);        
    });
  }

  voltar(): void {
    this.router.navigate(['/listar'])
  }
}
