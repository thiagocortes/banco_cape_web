import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { TableListComponent } from '../../table-list/table-list.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AccountsModule } from '../../accounts/accounts.module';
import { BalanceModule } from '../../balance/balance.module';
import { HomeModule } from '../../home/home.module';
import { DepositModule } from '../../deposit/deposit.module';
import { WithdrawalModule } from '../../withdrawal/withdrawal.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    AccountsModule,
    BalanceModule,
    HomeModule,
    DepositModule,
    WithdrawalModule
  ],
  declarations: [
    TableListComponent,
    UpgradeComponent
  ]
})

export class AdminLayoutModule {}
