import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cadastrar-vinho',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  voltar(): void{
    this.router.navigate(['/listar'])
  }
}
