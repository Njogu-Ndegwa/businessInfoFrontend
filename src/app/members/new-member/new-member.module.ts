import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { CustomCardModule } from 'src/app/components/card/card.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
  ],
  imports: [
TableModule,
CommonModule,
CustomCardModule
  ]
})
export class NewMemberModule { }
