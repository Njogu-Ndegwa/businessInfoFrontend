import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { CustomCardModule } from '../components/card/card.module';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { NewPartnerComponent } from './new-partner/new-partner.component';
import { NewPartnerRoutingModule } from './partners.route';
@NgModule({
  declarations: [
PartnersComponent,
NewPartnerComponent
  ],
  imports: [
TableModule,
NewPartnerRoutingModule,
CommonModule,
CustomCardModule
  ]
})
export class PartnersModule { }
