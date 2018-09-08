import { Component, OnInit } from '@angular/core';
import { Vinho } from './../../models';
import { VinhosService } from './../../services';

@Component({
  selector: 'app-vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  constructor(
    public vinhosService: VinhosService
  ) { }

  ngOnInit() {
    this.vinhosService.listar()
    .subscribe((vinhos: Array<Vinho>) => this.vinhos = vinhos);
  }
}
