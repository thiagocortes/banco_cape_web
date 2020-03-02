import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  pathUrl = environment.baseUrl+"contas/";

  constructor(public http: HttpClient) { }

  getSaldo(banco, agencia, conta){
    return this.http.get(this.pathUrl+banco+"/"+agencia+"/"+conta).pipe(map((res: any) => res));
  }

  retirar(banco, agencia, conta, valor){
    return this.http.get(this.pathUrl).pipe(map((res: any) => res));
  }

  depositar(banco, agencia, conta, valor){
    return this.http.get(this.pathUrl).pipe(map((res: any) => res));
  }

}
