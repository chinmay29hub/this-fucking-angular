import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  showAlert = false
  alertMsg = "Please Wait! Your Account is being Created."
  alertColor = "blue"

  registerForm = new FormGroup({
    name : new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    email : new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    age : new FormControl("", [
      Validators.required,
      Validators.min(18),
      Validators.max(120)
    ]),
    password : new FormControl("", [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a−z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
    ]),
    confirm_password : new FormControl("", [
      Validators.required
    ]),
    phoneNumber : new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ])
  })

  register () {
    // console.log("Form submitted")
    this.showAlert = true
    this.alertMsg = "Please Wait! Your Account is being Created."
    this.alertColor = "blue"
  }

}
