import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositComponent } from './deposit.component';
import { AccountsModule } from '../accounts/accounts.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [DepositComponent],
  imports: [
    CommonModule,
    AccountsModule,
    FormsModule,
    MatIconModule
  ]
})
export class DepositModule { }
