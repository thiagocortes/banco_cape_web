import { Component, OnInit } from '@angular/core';
import { MovementService } from 'app/services/movement.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {

  value;
  account;
  msgErro;
  msgOK;
  constructor(private movement: MovementService) { }

  ngOnInit() {
    this.msgOK = null;
    this.msgErro = null;
  }

  withdrawal() {
    this.msgErro = null;
    this.msgOK = null;
    if (this.account && this.value) {
      const move = {
        valor: this.value,
        banco: this.account.bank,
        agencia: this.account.agency,
        numConta: this.account.number
      }
      this.movement.retirar(move).pipe(take(1)).subscribe(() => {
        this.value = null;
        this.msgOK = "Valor retirado com sucesso"
      }, error => {
        this.msgErro = error.error.message;
      })
    } else {
      this.msgErro = "Todos os campos são obrigatórios";
    }

  }

  receiver(event) {
    if (event.account)
      this.account = event.account;
  }

}
