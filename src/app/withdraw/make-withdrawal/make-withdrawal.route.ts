import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeWithdrawalComponent } from './make-withdrawal.component';

const routes: Routes = [
  {
    path: '',
    component: MakeWithdrawalComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeWithdrawalRoutingModule { }
