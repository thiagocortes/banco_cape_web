import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  pathUrl = environment.baseUrl+"movimentacoes/";

  constructor(public http: HttpClient) { }

  retirar(movimento){
    return this.http.put(this.pathUrl+"withdrawal", movimento).pipe(map((res: any) => res));
  }

  depositar(movimento){
    return this.http.put(this.pathUrl+"deposits", movimento).pipe(map((res: any) => res));
  }
}
