import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { CustomCardModule } from '../components/card/card.module';
import { CommonModule } from '@angular/common';
import { WithdrawComponent } from './withdraw.component';
import { MakeWithdrawalComponent } from './make-withdrawal/make-withdrawal.component';
import { WithdrawRoutingModule } from './withdraw.route';
@NgModule({
  declarations: [
WithdrawComponent,
MakeWithdrawalComponent
  ],
  imports: [
TableModule,
WithdrawRoutingModule,
CommonModule,
CustomCardModule
  ]
})
export class WithdrawModule { }
