import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {
withdrawals: any = []
constructor(private router: Router) {
  this.withdrawals = [
    {
      id: '1000',
      transaction_amount: 500,
      date: '2024-01-01 12:20:28'
  },
  {
      id: '1001',
      transaction_amount: 400,
      date: '2024-01-01 12:20:28'
  },
  {
      id: '1002',
      transaction_amount: 600,
      date: '2024-01-01 12:20:28'
  },
  ]
}
  handleWithdrawal(){
    this.router.navigate(['/dashboard/withdraw/add'])
  }
}
