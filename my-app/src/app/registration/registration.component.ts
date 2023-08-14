import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  success: boolean;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // Define the registration form here directly with FormBuilder
  registrationForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    bio: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  // Handle form submission
  onSubmit(): void {
    if (this.registrationForm.valid) {
      const url = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';
      this.http.get<ApiResponse>(url).subscribe(response => {
        if (response.success) {
          // TODO: Navigate to the profile page once routing is set up.
          console.log('Registration successful! Navigate to profile page here.');
        }
      });
    } else {
      console.error('Form is invalid. Please correct any errors and try again.');
    }
  }
}

