import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-partner',
  templateUrl: './new-partner.component.html',
  styleUrls: ['./new-partner.component.scss']
})
export class NewPartnerComponent {

  constructor(private router: Router) {

  }
  handleBack() {
    this.router.navigate(['/dashboard/partners'])
  }
}
