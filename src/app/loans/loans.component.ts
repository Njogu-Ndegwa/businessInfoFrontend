import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent {
  loans: any = []
  processingLoan: any = []
  awaitingApproval: any = []
  allMemberLoans: any = []
  activeTab: string = 'My-Loans'
  constructor(private router: Router) {
    this.loans = [
      {
        id: '1000',
        transaction_amount: 500,
        status: 'IN-PROGRESS',
        date: '2024-01-01 12:20:28'
      },
      {
        id: '1001',
        transaction_amount: 400,
        status: 'UNPAID',
        date: '2024-01-01 12:20:28'
      },
      {
        id: '1002',
        transaction_amount: 600,
        status: 'PAID',
        date: '2024-01-01 12:20:28'
      },
    ]
    this.processingLoan = [
      {
        id: '1002',
        member_name: 'Dennis Ndegwa',
        status: 'APPROVED',
        date: '2024-01-01 12:20:28'
      },
      {
        id: '1002',
        member_name: 'Dennis Njogu',
        status: 'IN-PROGRESS',
        date: '2024-01-01 12:20:28'
      },
      {
        id: '1002',
        member_name: 'Serah Wakanyi',
        status: 'APPROVED',
        date: '2024-01-01 12:20:28'
      },
    ]

    this.awaitingApproval = [
      {
        member_name: 'Dennis Njogu',
        transaction_amount: 1000,
        date: '2024-01-01 12:20:28'
      }
    ]

    this.allMemberLoans = [
      {

        id: 1000,
        member_name: 'Dennis Njogu',
        transaction_amount: 1000,
        status: 'REJECTED',
        date: '2024-01-01 12:20:28'
      },

      {

        id: 1001,
        member_name: 'Serah Wakanyi',
        transaction_amount: 1000,
        status: 'PAID',
        date: '2024-01-01 12:20:28'
      },

      
      {

        id: 1001,
        member_name: 'Tee Bee',
        transaction_amount: 2000,
        status: 'UNPAID',
        date: '2024-01-01 12:20:28'
      }
    ]
  }
  addLoan() {
    this.router.navigate(['/dashboard/loans/add'])
  }

  getSeverity(status: string) {
    switch (status) {
      case 'PAID':
        return 'success';
      case 'APPROVED':
        return 'success';
      case 'NON-APPROVED':
        return 'warning';
      case 'IN-PROGRESS':
        return 'warning';
      case 'PAID':
        return 'danger';
      case 'REJECTED':
        return 'danger';
      default:
        return 'danger'
    }
  }

  setActive(tab: string) {
    this.activeTab = tab
  }
}
