import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Vinho } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VinhosService {

  url: string = 'api/vinhos';

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Array<Vinho>> {
    return this.http.get(this.url)      
      .map(response => response as Array<Vinho>)
      .catch(this.handleError);
  }

  cadastrar(vinho: Vinho): Observable<Vinho> {
    return this.http.post<Vinho>(this.url, vinho, this.header())
      .catch(this.handleError);
  }

  findById(id: number): Observable<Vinho> {
    return this.http.get(`${this.url}/${id}`)      
      .map(response => response as Array<Vinho>)
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
