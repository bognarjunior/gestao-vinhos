import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { Vinho } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VinhosService {
  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Array<Vinho>> {
    return this.http.get('api/vinhos')      
      .map(response => response as Array<Vinho>)
      .catch(this.handleError);
  }

  cadastrar(vinho: Vinho): Observable<Vinho> {
    return this.http.post<Vinho>('api/vinhos', vinho, this.header())
      .catch(this.handleError);
  }

  private handleError(erro: any): Observable<any> {
    return Observable.throw(erro.message | erro);   
  }

  private header(): object {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });

    return { headers };
  }
}
