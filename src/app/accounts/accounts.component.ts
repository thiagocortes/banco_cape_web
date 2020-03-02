import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmitterService } from '../services/emitter.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  @Output() return = new EventEmitter();

  account = {} as any;

  constructor(private _emitter: EmitterService) { }

  ngOnInit() {
    this.account.bank = 103;
  }

  onChange(event){
    this._change();
  }
  private _change(){
    if( this.account.agency && this.account.number)
      this.return.emit({account: this.account});
  }

}
