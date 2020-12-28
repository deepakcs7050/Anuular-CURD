import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employees:Employee[]=[
  {
    id: 1,
    name:"employee1",
    email:"employee2@gmail.com",
    phone:1111
  },
  {
    id: 2,
    name:"employee2",
    email:"employee2@gmail.com",
    phone:2222
  },
  {
    id: 3,
    name:"employee3",
    email:"employee3@gmail.com",
    phone:333
  }
]
  constructor() { }

  onGet(){
    return this.employees;
  }

  onGetEmployee(id: Number){
    return this.employees.find(x=>x.id === id);
  }

  onAdd(employee:Employee){
    return this.employees.push(employee)
  }

  onDelete(id: Number){
    let employee = this.employees.find(x=>x.id === id)
    let index = this.employees.indexOf(employee,0)
    this.employees.splice(index,1);
  }

  onUpdate(employee: Employee){
    let oldEmployee = this.employees.find(x=>x.id === employee.id);
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone

  }
}
