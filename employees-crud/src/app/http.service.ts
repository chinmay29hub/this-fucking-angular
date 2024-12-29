import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from './interfaces/employee';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = 'http://localhost:5019';
  http = inject(HttpClient);
  constructor() {}

  getAllEmployees() {
    return this.http.get<IEmployee[]>(this.apiUrl + '/api/Employee');
  }

  addEmployee(employee: IEmployee) {
    return this.http.post(this.apiUrl + '/api/Employee', employee);
  }

  getEmployee(employeeId: number) {
    return this.http.get<IEmployee>(this.apiUrl + '/api/Employee/' + employeeId);
  }

  updateEmployee(employeeId: number, employee:IEmployee) {
    return this.http.put(this.apiUrl + '/api/Employee/' + employeeId, employee);
  }

  deleteEmployee(employeeId: number) {
    return this.http.delete(this.apiUrl + '/api/Employee/' + employeeId);
  }
}
