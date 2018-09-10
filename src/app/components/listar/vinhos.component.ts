import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vinho } from './../../models';
import { VinhosService } from './../../services';

@Component({
  selector: 'listar-vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  vinhoSelecionado: Vinho;

  constructor(
    private router: Router,
    public vinhosService: VinhosService
  ) { }

  ngOnInit() {
    this.vinhosService.listar()
      .subscribe((vinhos: Array<Vinho>) => this.vinhos = vinhos);
  }

  selecionar(vinho: Vinho) {
    this.vinhoSelecionado = vinho;
  }

  visualizar() {
    this.router.navigate(['/detalhe', this.vinhoSelecionado.id]);
  }

  editar() {
    this.router.navigate(['/atualizar', this.vinhoSelecionado.id]);
  }
}
