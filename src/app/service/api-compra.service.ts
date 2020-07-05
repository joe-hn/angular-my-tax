import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiCompraService {

  url: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) {
    this.url = _global.url + 'compra/';
  }

  private extractData(res: Response) {

    let body = res;
    return body || {};
  }

  GetSinProcesar(): Observable<any> {
    return this.http.get(this.url + '/sinprocesar', this.httpOptions).pipe(map(this.extractData));
  }

  GetClienteTipoProyecto(cliente, proyecto): Observable<any> {
    return this.http.get(this.url + cliente + '/' + proyecto, this.httpOptions).pipe(map(this.extractData));
  }

  GetId(id): Observable<any> {
    return this.http.get(this.url + 'informacion/edicion/' + id, this.httpOptions).pipe(map(this.extractData));
  }

  Post(modelo): Observable<any> {
    return this.http.post<any>(this.url, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  Patch(id, modelo): Observable<any> {
    return this.http.patch(this.url + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  Delete(id): Observable<any> {
    return this.http.delete(this.url + id).pipe();
  }

}
