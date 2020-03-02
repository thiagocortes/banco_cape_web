import { Routes } from '@angular/router';
import { AccountsComponent } from '../../accounts/accounts.component';
import { BalanceComponent } from '../../balance/balance.component';
import { DepositComponent } from '../../deposit/deposit.component';
import { WithdrawalComponent } from '../../withdrawal/withdrawal.component';
import { HomeComponent } from '../../home/home.component';


export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'home' },
    { path: 'balances',      component: BalanceComponent},
    { path: 'deposits',      component: DepositComponent},
    { path: 'withdrawal',      component: WithdrawalComponent},
    { path: 'home',      component: HomeComponent},
];
