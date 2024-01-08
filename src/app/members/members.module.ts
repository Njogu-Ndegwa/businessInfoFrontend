import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { CustomCardModule } from '../components/card/card.module';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MembersRoutingModule } from './members.route';
@NgModule({
  declarations: [
MembersComponent,
NewMemberComponent
  ],
  imports: [
TableModule,
MembersRoutingModule,
CommonModule,
CustomCardModule
  ]
})
export class MembersModule { }
