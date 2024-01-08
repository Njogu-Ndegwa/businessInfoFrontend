import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent {
  constructor(private router: Router){

  }

  handleBack() {
    this.router.navigate(['dashboard/members'])
  }
}
