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
  constructor(private movement: MovementService) { }

  ngOnInit() {
  }

  deposit(){
    const move = {
      valor: this.value,
      banco: this.account.bank,
      agencia: this.account.agency,
      numConta: this.account.number
    }
    this.movement.depositar(move).pipe(take(1)).subscribe(item=>{
      this.value = null;
    }, error =>{
      console.log(error.error.message)
    })
  }

  receiver(event) {
    this.account = event.account;
  }

}
