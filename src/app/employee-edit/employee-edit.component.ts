import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  id:number;
  header:string;
  employee: Employee ={
    id: 0,
    name: "",
    email: "",
    phone: 0
  }

  constructor(private route:ActivatedRoute, private service:EmployeeService,private router:Router ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0? 'Add employee':'Edit employee';

    if(this.id != 0){
      this.employee =this.service.onGetEmployee(this.id)
    }

  }

  onSubmit(form:NgForm){
   let emp: Employee = {
     id: form.value.id,
     name:form.value.name,
     email:form.value.email,
     phone:form.value.phone

   }
   if(this.id ===0){
    this.service.onAdd(emp);
   }
   else{
     this.service.onUpdate(emp)
   }
   this.router.navigateByUrl('')
  }

}
