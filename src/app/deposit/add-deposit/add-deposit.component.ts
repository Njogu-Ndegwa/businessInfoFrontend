import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-deposit',
  templateUrl: './add-deposit.component.html',
  styleUrls: ['./add-deposit.component.scss']
})
export class AddDepositComponent {
  constructor(private router: Router){}

  handleBack() {
    this.router.navigate(['dashboard/deposit'])
  }
}
