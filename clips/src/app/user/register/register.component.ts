import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import IUser from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private auth : AuthService) {

  }

  inSubmission = false;

  showAlert = false;
  alertMsg = 'Please Wait! Your Account is being Created.';
  alertColor = 'blue';

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(120),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a−z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
      ),
    ]),
    confirm_password: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
  });

  async register() {
    // console.log("Form submitted")
    this.showAlert = true;
    this.alertMsg = 'Please Wait! Your Account is being Created.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.createUser(this.registerForm.value as IUser)
    } catch (e: any) {
      console.error(e);

      switch (e.code) {
        case 'auth/email-already-in-use':
          this.alertMsg = 'Email already exists. Please use a different email.';
          break;
        case 'auth/invalid-email':
          this.alertMsg = 'Invalid email address.';
          break;
        case 'auth/weak-password':
          this.alertMsg = 'The password is too weak.';
          break;
        default:
          this.alertMsg =
            'An Unexpected Error occurred. Please try again later.';
      }
      this.alertColor = 'red';
      this.inSubmission = false;

      return;
    }

    this.alertMsg = 'Success! Your Account has been Created.';
    this.alertColor = 'green';
  }
}
