import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnersComponent } from './partners.component';
import { NewPartnerComponent } from './new-partner/new-partner.component';
const routes: Routes = [
  {
    path: '',
    component: PartnersComponent
  },

  {
    path: 'add',
    component: NewPartnerComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPartnerRoutingModule { }
