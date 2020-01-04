import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEWayComponent } from './form-e-way/form-e-way.component';
import { BillSystemComponent } from './bill-system/bill-system.component';


const routes: Routes = [  {
  path:'billsystem',
  component:BillSystemComponent
  },
  {path:'', component:FormEWayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
