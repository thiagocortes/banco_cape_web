import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawalComponent } from './withdrawal.component';
import { AccountsModule } from 'app/accounts/accounts.module';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WithdrawalComponent],
  imports: [
    CommonModule,
    AccountsModule,
    FormsModule,
    MatIconModule
  ]
})
export class WithdrawalModule { }
