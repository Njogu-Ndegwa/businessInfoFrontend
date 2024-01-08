import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { DepositComponent } from './deposit.component';
import { CustomCardModule } from '../components/card/card.module';
import { CommonModule } from '@angular/common';
import { DepositRoutingModule } from './deposit.route';
import { AddDepositComponent } from './add-deposit/add-deposit.component';
@NgModule({
  declarations: [
DepositComponent,
AddDepositComponent
  ],
  imports: [
TableModule,
DepositRoutingModule,
CommonModule,
CustomCardModule
  ]
})
export class DepositModule { }
