import { Component, OnInit, Input } from '@angular/core';

import { Vinho } from '../../models';

@Component({
  selector: 'vinho-container',
  templateUrl: './vinho-container.component.html',
  styleUrls: ['./vinho-container.component.css']
})
export class VinhoContainerComponent implements OnInit {

  @Input() vinho: Vinho;
  constructor() { }

  ngOnInit() {
  }

}
