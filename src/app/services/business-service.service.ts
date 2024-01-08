import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BusinessServiceService {

  constructor(private http: HttpClient) { }

  showBusinessService() {
    return this.http.get(`${environment.api}business`)
  }

  addBusiness(  
  businessName: string ,
  servicesOffered: string,
  description: string,
  location: string,
  businessContact: string,
  businessEmail:string,
  socialMediaHandle: string,
  businessWebsite: string,
  whatsupLink: string) {
    return this.http.post(`${environment.api}business/`, {
      business_name: businessName,
      services_offered: servicesOffered,
      description: description,
      location: location,
      business_contact: businessContact,
      business_email: businessEmail,
      social_media_handle: socialMediaHandle,
      business_website: businessWebsite,
      whatsup_link: whatsupLink
    })
  }
}
