import { Component, OnInit } from '@angular/core';
import { documento } from 'src/app/model/documento';
import { ApiDocumentoService } from 'src/app/service/api-documento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { compra } from 'src/app/model/compra';
import { menu } from 'src/app/model/menu';
import { factura } from 'src/app/model/factura';
import { ApiFacturaService } from 'src/app/service/api-factura.service';
import { ApiCompraService } from 'src/app/service/api-compra.service';

@Component({
  selector: 'app-procesar-compra',
  templateUrl: './procesar-compra.component.html',
  styleUrls: ['./procesar-compra.component.css']
})
export class ProcesarCompraComponent implements OnInit {
  menu: menu[];
  documentolista: documento[];
  compramodelo: compra = new compra('', '', '', '', '');
  modelo: factura = new factura('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

  dateInicio: Date = new Date();

  constructor(
    private api: ApiFacturaService,
    private apidocumento: ApiDocumentoService,
    private apicompra: ApiCompraService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.modelo = new factura(''
      , ''
      , ''
      , '28/11/2019'
      , 'Plasticos tonys'
      , '080119010271068'
      , '078D7F-BC897C-8A4AAB-A0B240-02DEB6-E5', '000-001-01-00261096'
      , '0.00'
      , '0.00'
      , '0.00'
      , '0.00'
      , '0.00'
      , '313.04'
      , '0.00'
      , '46.96'
      , '0.00'
      , '0.00'
      , '360.00'
      , '0.00'
      , '360.00'
      , ''
      , '');


    this.compramodelo._id = this.route.snapshot.params.compra;

    this.apicompra.GetId(this.compramodelo._id).subscribe(res => {
      this.compramodelo = res.modelo;

      this.apidocumento.GetCompra(this.compramodelo._id).subscribe(res => {
        this.documentolista = res.modelo;
      })
    })

  }

  onRegresar() {
    this.router.navigate(['/lista-compra']);
  }

  onGuardar() {
    /*
        this.modelo.cliente = this.compramodelo.cliente;
        this.modelo.proyecto = this.compramodelo.proyecto;
    
        this.api.Post(this.modelo).subscribe(res => {
          this.compramodelo.estado = 'procesada';
    
          this.apicompra.Patch(this.compramodelo._id, this.compramodelo).subscribe(res => {
            this.onRegresar();
          })
        })
        */

    this.onRegresar();

  }

  onCancelar() {

  }

}
