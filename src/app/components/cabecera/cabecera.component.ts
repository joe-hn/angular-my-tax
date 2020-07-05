import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  usuario: string;

  constructor() { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('_u');
  }

}
