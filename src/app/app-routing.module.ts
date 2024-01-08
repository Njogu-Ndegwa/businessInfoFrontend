import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },

  {
    path: 'signup',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then(
        (m) => m.SignUpModule

      ),
  },


  {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        {
          path: 'deposit',
          loadChildren: () =>
            import('./deposit/deposit.module').then(
              (m) => m.DepositModule
            ),
        }, 
        {
          path: 'reports',
          loadChildren: () =>
            import('./reports/reports.module').then(
              (m) => m.ReportsModule
            ),
        }, 
        {
          path: 'transactions',
          loadChildren: () =>
            import('./transactions/transactions.module').then(
              (m) => m.TransactionsModule
            ),
        },
        {
          path: 'withdraw',
          loadChildren: () =>
            import('./withdraw/withdraw.module').then(
              (m) => m.WithdrawModule
            ),
        },
        {
          path: 'members',
          loadChildren: () =>
            import('./members/members.module').then(
              (m) => m.MembersModule
            ),
        },

        {
          path: 'partners',
          loadChildren: () =>
            import('./partners/partners.module').then(
              (m) => m.PartnersModule
            ),
        },

        {
          path: 'loans',
          loadChildren: () =>
            import('./loans/loans.module').then(
              (m) => m.LoansModule
            ),
        },
      ]
    

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
