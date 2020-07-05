import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { ApiContadorService } from 'src/app/service/api-contador.service';
import { contador } from 'src/app/model/contador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modelo: contador = new contador('', '', '', '', '');
  validacion: boolean = false;
  noUsuario: boolean = false;

  constructor(
    private api: ApiContadorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.modelo.email && this.modelo.pass) {
      this.api.Login(this.modelo).subscribe(res => {
        this.modelo = res.modelo;

        localStorage.setItem('_uid', this.modelo.uid);
        localStorage.setItem('_u', this.modelo.nombre);

        this.router.navigate(['/lista-compra'])
      })
    }


    //console.log('-- MODELO --', this.modelo);
    /*
        if (this.modelo.USUARIO && this.modelo.PASS) {
          this.api.Login(this.modelo).subscribe(res => {
    
            //console.log('--PASO EL POST LOGIN');
    
            if (!res.error_estado) {
    
              //console.log('--PASO EL POST LOGIN SIN ERROR');
    
              this.modelo = res.modelo;
    
              localStorage.setItem('_usr', JSON.stringify(res.modelo));
              localStorage.setItem('_u', res.modelo.USUARIO);
              localStorage.setItem('_tk', res.tk);
    
              //console.log('-- VALORES DE LOCAL STORAGE --', this.modelo);
    
              this.api.usuarioId(this.modelo.ID).subscribe(res => {
    
                console.log('-- PERFIL DE USUARIO --', res.modelo);
    
                localStorage.setItem('_user', JSON.stringify(res.modelo));
    
                this.router.navigate(['/lista-operaciones']);
              })
    
            } else {
              this.noUsuario = true;
            }
          }, error => {
            console.log('-- ERROR ---/ ', error);
            this.router.navigate(['/error']);
          })
    
        } else {
          this.validacion = true;
        }
        */
  }

}
