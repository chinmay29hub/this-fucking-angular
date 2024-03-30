import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials = {
    email : "",
    password : ""
  }

  showAlert = false
  alertMsg = "Please Wait! We are Logging you in."
  alertColor = "blue"
  inSubmission = false

  constructor(private auth : AngularFireAuth) {

  }


  async login () {
    this.showAlert = true
    this.alertMsg = "Please Wait! We are Logging you in."
    this.alertColor = "blue"
    this.inSubmission = true
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      )
    } catch (error:any) {
      this.inSubmission = false
      switch (error.code) {
        case "auth/user-not-found":
          this.alertMsg = "User not found. Please check your email.";
          break;
        case "auth/wrong-password":
          this.alertMsg = "Incorrect password. Please try again.";
          break;
        case "auth/too-many-requests":
          this.alertMsg = "Too many unsuccessful login attempts. Please try again later.";
          break;
        default:
          this.alertMsg = "An Unexpected Error occurred! Please try again later.";
          break;
      }
      this.alertColor = "red"
      console.log(error)
      return
    }
    this.alertMsg = "Success! You are now Logged In."
    this.alertColor = "green"
  }
}
