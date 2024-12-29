import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';
import { HttpService } from '../../http.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  imports: [MatTableModule, MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  router = inject(Router);
  toaster = inject(ToastrService)
  employeeList: IEmployee[] = [];

  httpService = inject(HttpService);

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'age',
    'phone',
    'salary',
    'action',
  ];

  ngOnInit() {
    this.httpService.getAllEmployees().subscribe((result) => {
      this.employeeList = result;
      console.log(this.employeeList);
    });
  }

  edit(id: number) {
    console.log(id);
    this.router.navigateByUrl('/employee/' + id);
  }

  delete(id: number) {
    console.log(id)
    this.httpService.deleteEmployee(id).subscribe(() => {
      console.log("deleted!")
      this.employeeList = this.employeeList.filter(x => x.id != id)
      this.toaster.warning("Employee Deleted Successfully!")
    })
  }
}
