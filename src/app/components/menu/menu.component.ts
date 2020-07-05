import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() regresar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitir_regresar() {
    this.regresar.emit('');
  }

}
