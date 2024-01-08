import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
transactions: any = []

constructor() {

  this.transactions = [
    {
        id: '1000',
        transaction_type: 'Deposit',
        transaction_amount: 500,
        date: '2024-01-01 12:20:28'
    },
    {
        id: '1001',
        transaction_type: 'Withdraw',
        transaction_amount: 400,
        date: '2024-01-01 12:20:28'
    },
    {
        id: '1002',
        transaction_type: 'Loan',
        transaction_amount: 600,
        date: '2024-01-01 12:20:28'
    },
    ]
}
}
