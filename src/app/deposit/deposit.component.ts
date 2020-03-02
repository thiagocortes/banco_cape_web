import { Component, OnInit } from '@angular/core';
import { MovementService } from '../services/movement.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  value;
  account;
  msgErro;
  msgOK;
  constructor(private movement: MovementService) { }

  ngOnInit() {
    this.msgOK = null;
    this.msgErro = null;
  }

  deposit() {
    if (this.account && this.value) {
      const move = {
        valor: this.value,
        banco: this.account.bank,
        agencia: this.account.agency,
        numConta: this.account.number
      }
      this.movement.depositar(move).pipe(take(1)).subscribe(item => {
        this.value = null;
        this.msgOK = "Valor retirado com sucesso"
      }, error => {
        this.msgErro = error.error.message
      })
    } else {
      this.msgErro = "Todos os campos são obrigatórios"
    }

  }

  receiver(event) {
    if (event.account)
      this.account = event.account;
  }

}
