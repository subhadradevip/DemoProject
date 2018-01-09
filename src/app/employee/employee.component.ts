import { Component } from '@angular/core';
@Component({
  selector: 'my-employee',
  templateUrl:'./employee.component.html',
  styleUrls: ['./employee.component.css'],
 
})
export class EmployeeComponent {
  firstName: string = 'subhadra';
  lastName: string = 'devi';
  gender: string = 'female';
  education: string = 'M.tech';
}
