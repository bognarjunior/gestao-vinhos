import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Vinho, Notificacao } from '../../models';
import { VinhosService, NotificacaoService } from '../../services';

@Component({
  selector: 'cadastrar-vinho',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  vinho: Vinho;
  uvas: Array<string>;
  classificacoes: Array<string>;
  title: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private vinhosService: VinhosService,
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit() {
    this.initValues();
  }

  private initValues(): void {
    
    this.vinho = new Vinho();
    this.title = 'Cadastro de vinho';

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

    this.activatedRoute.params.forEach((params: Params) => {
      const id = +params['id'];
      if (id) {
        this.title = 'Edição de vinho';
        this.buscarVinho(id);
      }
    });
  }

  salvar(): void {
    if (this.vinho.id) {
      this.atualizarVinho();
    } else {
      this.cadastrarVinho();
    }
  }

  private buscarVinho(id: number) {
    this.vinhosService.findById(id)
      .subscribe((vinho: Vinho) => this.vinho = vinho);
  }

  private cadastrarVinho() {
    this.vinhosService.cadastrar(this.vinho)
    .subscribe(() => {
      this.notificacaoService.sucesso('Vinho cadastrado com sucesso');
      this.router.navigate(['/listar'])
    });
  }

  private atualizarVinho() {
    this.vinhosService.atualizar(this.vinho.id, this.vinho)
      .subscribe(() => {
        this.notificacaoService.sucesso('Vinho atualizado com sucesso');
        this.router.navigate(['/listar'])
      });
  }

  voltar(): void {
    this.router.navigate(['/listar'])
  }
}
