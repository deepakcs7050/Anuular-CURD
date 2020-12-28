import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component:EmployeeComponent},
  { path:'header',component:HeaderComponent},
  { path:'employee/add/:id',component:EmployeeEditComponent},
  { path:'employee/edit/:id',component:EmployeeEditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
