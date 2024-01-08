import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { CustomCardModule } from '../components/card/card.module';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { LoansRoutingModule } from './loans.route';
import {TagModule} from 'primeng/tag'
import { TabViewModule } from "primeng/tabview"; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
  declarations: [
LoansComponent,
ApplyLoanComponent
  ],
  imports: [
TableModule,
LoansRoutingModule,
CommonModule,
CustomCardModule,
TagModule,
TabViewModule,
MatButtonToggleModule

  ]
})
export class LoansModule { }
