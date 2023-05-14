import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './component/main/employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';

const routes: Routes = [{ path: '', component: EmployeeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

