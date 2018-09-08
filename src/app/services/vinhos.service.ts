import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

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
      .catch(this.tratarErro);
  }

  private tratarErro(erro:any): Observable<any> {
    console.log(erro);
    return Observable.throw(erro.message | erro);   
  }
}
