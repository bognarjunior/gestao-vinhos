import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vinho } from './../../models';
import { VinhosService, NotificacaoService } from './../../services';

@Component({
  selector: 'listar-vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  vinhoSelecionado: Vinho;
  campoBusca: string;

  constructor(
    private router: Router,
    public vinhosService: VinhosService,
    public notificacaoService: NotificacaoService
  ) { }

  ngOnInit() {
    this.listar();
  }

  private listar() {
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

  remover() {
    this.vinhosService.remover(this.vinhoSelecionado.id)
    .subscribe(() => {
      this.notificacaoService.perigo('Vinho deletado com sucesso');
      this.listar()
    });
  }
}
