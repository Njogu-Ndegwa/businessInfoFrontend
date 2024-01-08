import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { BusinessServiceService } from '../services/business-service.service';
@Component({
  selector: 'app-business-listing',
  templateUrl: './business-listing.component.html',
  styleUrls: ['./business-listing.component.scss']
})
export class BusinessListingComponent implements OnInit {
businessListing:any = []
loading: boolean = false
@ViewChild('dt') dt: Table | undefined;
constructor(private router: Router, private businessService: BusinessServiceService) {

}
applyFilterGlobal($event:any, stringVal:any) {
  console.log($event, stringVal, '----19---')
  this.dt!.filterGlobal($event.data, stringVal);
}

addBusiness(){
  this.router.navigate(['/add'])
}
ngOnInit() {
  this.showBusiness()
}
showBusiness() {
this.businessService.showBusinessService().subscribe((res) =>{
  this.businessListing = res
})
}

}
