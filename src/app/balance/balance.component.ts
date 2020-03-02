import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  account;
  balance = {} as any;
  constructor(private accountService: BankService) { }

  ngOnInit() {

  }

  receiver(event) {
    this.account = event.account;
  }

  display(){
    this.balance = this.accountService
      .getSaldo(this.account.bank, this.account.agency, this.account.number)
      .pipe(take(1)).subscribe(value=>{
        this.balance = value;
      }, erro=>{
        this.balance.saldo = erro.error.message
      });
  }

}
