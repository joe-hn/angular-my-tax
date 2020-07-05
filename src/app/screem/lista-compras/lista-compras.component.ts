import { Component, OnInit } from '@angular/core';
import { compra } from 'src/app/model/compra';
import { ApiCompraService } from 'src/app/service/api-compra.service';
import { ActivatedRoute, Router } from '@angular/router';
import { menu } from 'src/app/model/menu';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {
  menu: menu[];

  modelo: compra[];

  constructor(
    private api: ApiCompraService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.GetSinProcesar().subscribe(res => {
      this.modelo = res.modelo;

      console.log(this.modelo);
    })
  }

  onRegresar() {
    this.router.navigate(['/login']);
  }

}
