import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners: any = []
  constructor(private router: Router) {
    this.partners = [
      {
        id: '1000',
        partner_name: 'Dennis Njogu',
        phone_number: '079535364'
    },
    {
        id: '1001',
        partner_name: 'Serah Wakanyi',
        phone_number: '0795334645'
    },
    {
        id: '1002',
        partner_name: 'Tee Bee',
        phone_number: '0795353543'
    },
    ]
  }

  addPartner() {
this.router.navigate(['/dashboard/partners/add'])
  }
}
