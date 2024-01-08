import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReportsComponent } from './reports.component';
import { NgChartsModule } from 'ng2-charts';
import { ReportsRoutingModule } from './reports.router';

// In your App's module:
imports: [NgChartsModule];
@NgModule({
  declarations: [
    ReportsComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    ReportsRoutingModule
    

  ],
})
export class ReportsModule { }
