import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent {
constructor(private router: Router){}

handleBack() {
  this.router.navigate(['dashboard/loans'])
}
}
