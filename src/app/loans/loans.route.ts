import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
const routes: Routes = [
  {
    path: '',
    component: LoansComponent
  },

  {
    path: 'add',
    component: ApplyLoanComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
