import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  // Import HttpClient here
import { Router } from '@angular/router';

interface ApiResponse {
  success: boolean;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    bio: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,  // Add HttpClient here
    private router: Router
  ) { }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const url = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';
      this.http.get<ApiResponse>(url).subscribe(response => {
        if (response.success) {
          localStorage.setItem('userRegistered', 'true');  // Set the flag in localStorage
          this.router.navigate(['/profile']);  // Navigate to Profile page
        } else {
          console.error('API did not return success. Do not navigate.');
        }
      }, error => {
        console.error('Error making the API call', error);
      });
    } else {
      console.error('Form is invalid. Please correct any errors and try again.');
    }
  }  
}
