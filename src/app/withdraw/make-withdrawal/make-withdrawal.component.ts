import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-make-withdrawal',
  templateUrl: './make-withdrawal.component.html',
  styleUrls: ['./make-withdrawal.component.scss']
})
export class MakeWithdrawalComponent {
  constructor(private router: Router){

  }

  handleBack() {
    this.router.navigate(['dashboard/withdraw'])
  }
}
