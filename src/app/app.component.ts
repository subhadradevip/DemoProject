import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  isdisabled: boolean=false;
  imagePath: string = '../assets/download.jpg';
  firstName: string = 'subhadra';
  lastName: string = 'devi';
  

  getFullName(): string {
    return this.firstName + '' + this.lastName;
  }
}
