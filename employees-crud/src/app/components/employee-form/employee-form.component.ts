import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-form',
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent {
  formBuilder = inject(FormBuilder);
  httpService = inject(HttpService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  toaster = inject(ToastrService);
  employeeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: [0, [Validators.required]],
    phone: ['', []],
    salary: [0, [Validators.required]],
  });
  employeeId!: number;

  isEdit = false;

  ngOnInit() {
    this.employeeId = this.route.snapshot.params['id'];
    if (this.employeeId) {
      this.isEdit = true;
      this.httpService.getEmployee(this.employeeId).subscribe((result) => {
        console.log(result);
        this.employeeForm.patchValue(result);
        this.employeeForm.controls.email.disable();
      });
    }
  }

  save() {
    console.log(this.employeeForm.value);
    this.employeeForm.controls.email.enable();
    const employee: IEmployee = {
      name: this.employeeForm.value.name!,
      email: this.employeeForm.value.email!,
      age: this.employeeForm.value.age!,
      phone: this.employeeForm.value.phone!,
      salary: this.employeeForm.value.salary!,
    };

    if (this.isEdit) {
      this.httpService
        .updateEmployee(this.employeeId, employee)
        .subscribe(() => {
          console.log('success!');
          this.toaster.success('Employee Updated Successfully!');
          this.router.navigateByUrl('/employee-list');
        });
    } else {
      this.httpService.addEmployee(employee).subscribe(() => {
        console.log('success!');
        this.toaster.success('Employee Added Successfully!');
        this.router.navigateByUrl('/employee-list');
      });
    }

    if (this.isEdit) {
      this.employeeForm.controls.email.disable();
    }
  }
}
