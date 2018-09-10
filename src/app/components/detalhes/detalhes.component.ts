import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VinhosService } from '../../services';
import { Vinho } from '../../models';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  vinho: Vinho;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private vinhosService: VinhosService
  ) { }

  ngOnInit() {
    this.vinho = new Vinho;
    this.activatedRoute.params.forEach((params: Params) => {
      const id = +params['id'];
      if (id) {
        this.buscarVinho(id);
      }
    });
  }

  private buscarVinho(id: number) {
    this.vinhosService.findById(id)
    .subscribe((vinho: Vinho) => this.vinho = vinho);
  }

  voltar(): void {
    this.router.navigate(['/listar'])
  }

}
