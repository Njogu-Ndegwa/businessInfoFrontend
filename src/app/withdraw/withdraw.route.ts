import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawComponent } from './withdraw.component';
import { MakeWithdrawalComponent } from './make-withdrawal/make-withdrawal.component';
const routes: Routes = [
  {
    path: '',
    component: WithdrawComponent
  },

  {
    path: 'add',
    component: MakeWithdrawalComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawRoutingModule { }
