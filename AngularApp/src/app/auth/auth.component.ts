import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

declare var M: any;
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
    providers: [EmployeeService]

})
export class AuthComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
 this.resetForm();
    this.refreshEmployeeList();
    localStorage.clear();
  }
    resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      mdp: "",
      salary: null
    }
}

 onSubmit(form: NgForm) {
this.refreshEmployeeList();
for(let us of  this.employeeService.employees)
{
	if((form.value.name==us.name)&&(form.value.mdp==us.mdp))
{
  localStorage.setItem("username",us.name);
	//alert("exist");
    window.location.replace('accueil');

}
else
{
  M.toast({ html: 'verification du profile', classes: 'rounded' });
        }
}


      
    }

 refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

}
