import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {

  @Input() title: string;
  @Output() acaoVoltar: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  voltar() {
    this.acaoVoltar.emit();
  }
}
