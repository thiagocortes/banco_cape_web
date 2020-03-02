import { NgModule } from '@angular/core';
import { AccountsComponent } from './accounts.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
  ],
  exports:[
    AccountsComponent,
    MatInputModule
  ]
})
export class AccountsModule { }
