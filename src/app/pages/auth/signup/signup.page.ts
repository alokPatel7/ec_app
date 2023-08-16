import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: any;
  passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit() {
  }

  submitForm() {
    if (this.signupForm.valid) {
      // Process the form data
      console.log('@ form data', this.signupForm.value);

    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup?.get('password')?.value;
    const confirmPassword = formGroup?.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup?.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup?.get('confirmPassword')?.setErrors(null); // Corrected line
    }
  }

}
