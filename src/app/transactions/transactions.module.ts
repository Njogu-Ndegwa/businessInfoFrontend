import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { TransactionsRoutingModule } from './transactions.route';
import { CustomCardModule } from '../components/card/card.module';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
@NgModule({
  declarations: [
// TradingBotComponet
TransactionsComponent
  ],
  imports: [
TableModule,
TransactionsRoutingModule,
CommonModule,
CustomCardModule
  ]
})
export class TransactionsModule { }
