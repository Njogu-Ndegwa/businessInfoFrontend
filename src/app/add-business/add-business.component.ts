import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessServiceService } from '../services/business-service.service';
@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.scss']
})
export class AddBusinessComponent {
  businessName: string =''
  servicesOffered: string = ''
  description: string = ''
  location: string = ''
  businessContact: string = ''
  businessEmail:string = ''
  socialMediaHandle: string = ''
  businessWebsite: string = ''
  whatsupLink: string = ''
  loading: boolean = false
  constructor(private router: Router, private businesService: BusinessServiceService) {

  }
  handleBack() {
    this.router.navigate(['/'])
  }

  handleSubmit() {
    this.loading = true
    console.log(  this.businessName,
      this.servicesOffered,
      this.description,
      this.location,
      this.businessContact,
      this.businessEmail,
      this.socialMediaHandle,
      this.businessWebsite,
      this.whatsupLink)
this.businesService.addBusiness(  
  this.businessName,
  this.servicesOffered,
  this.description,
  this.location,
  this.businessContact,
  this.businessEmail,
  this.socialMediaHandle,
  this.businessWebsite,
  this.whatsupLink).subscribe((res) => {
    console.log(res, '---38')
    this.loading = false
    this.router.navigate(['/'])

  })
  }
}



