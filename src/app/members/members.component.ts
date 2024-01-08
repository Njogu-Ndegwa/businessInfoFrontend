import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  members: any = []
  constructor(private router: Router) {
    this.members = [
      {
        id: '1000',
        member_name: 'Dennis Njogu',
        phone_number: '079535364'
    },
    {
        id: '1001',
        member_name: 'Serah Wakanyi',
        phone_number: '0795334645'
    },
    {
        id: '1002',
        member_name: 'Tee Bee',
        phone_number: '0795353543'
    },
    ]
  }

  addMember() {
this.router.navigate(['/dashboard/members/add'])
  }
}
