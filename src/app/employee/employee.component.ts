import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employeeList:Employee[];
  constructor( private service:EmployeeService) { }

  ngOnInit(): void {
    this.employeeList =this.service.onGet();
  }

  onDelete(id: Number){
    this.service.onDelete(id);
  }

}
