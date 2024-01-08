import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListingComponent } from './business-listing/business-listing.component';
import { AddBusinessComponent } from './add-business/add-business.component';
const routes: Routes = [
{
  path: '',
  component: BusinessListingComponent
},
{
  path: 'add',
  component: AddBusinessComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
