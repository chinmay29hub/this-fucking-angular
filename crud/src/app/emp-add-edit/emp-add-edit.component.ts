import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.scss'
})
export class EmpAddEditComponent implements OnInit {

  empForm : FormGroup

  education : string[] = ["Matric", "Diploma", "Intermediate", "Graduation", "Post Graduate"]

  constructor (private _fb : FormBuilder, private _empService : EmployeeService, private _dialogRef : MatDialogRef<EmpAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data : any, private _coreService : CoreService) {
    this.empForm = this._fb.group({
      firstName : "",
      lastName : "",
      email : "",
      dob : "",
      gender : "",
      education : "",
      company : "",
      experience : "",
      package : ""
    })
  }

  ngOnInit(): void {
      this.empForm.patchValue(this.data)
  }

  onFormSubmit () {
    if (this.empForm.valid) {
      if (this.data) {
        // console.log(this.empForm.value)
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next : (val : any) => {
            // alert("Employee Updated!")
            this._coreService.openSnackBar("Employee Details Updated!")
            this._dialogRef.close(true)
          },
          error : (err : any) => {
            console.error(err)
          }
        })
      } else {
        // console.log(this.empForm.value)
        this._empService.addEmployee(this.empForm.value).subscribe({
          next : (val : any) => {
            // alert("Employee Added Successfully!")
            this._coreService.openSnackBar("Employee Added Succesfully!")
            this._dialogRef.close(true)
          },
          error : (err : any) => {
            console.error(err)
          }
        })

      }
    }
  }

}
