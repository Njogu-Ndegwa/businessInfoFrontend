import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit.component';
import { AddDepositComponent } from './add-deposit/add-deposit.component';
const routes: Routes = [
  {
    path: '',
    component: DepositComponent
  },

  {
    path: 'add',
    component: AddDepositComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
