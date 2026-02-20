import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  contactForm: FormGroup;
  submitSuccess = false;
  submitError = false;
  isSubmitting = false;

  private apiUrl = 'https://zymetreeapi-production.up.railway.app/api/users';

  purposes = [
    'General enquiry',
    'Sales enquiry',
    'Support request',
    'Partnership',
    'Other'
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: [''],
      state: [''],
      zip: [''],
      country: ['', Validators.required],
      website: [''],
      purpose: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(180)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formValue = this.contactForm.value;

    // Map form fields to match your database column names
    const payload = {
      firstName: formValue.name,
      lastName: '',
      email: formValue.email,
      phone: formValue.phone,
      city: formValue.city,
      state: formValue.state,
      pincode: formValue.zip,
      country: formValue.country,
      website: formValue.website,
      purpose: formValue.purpose,
      queries: formValue.message
    };

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.http.post(this.apiUrl, payload).subscribe({
      next: (response) => {
        console.log('Submitted successfully:', response);
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
      },
      error: (error) => {
        console.error('Submission failed:', error);
        this.isSubmitting = false;
        this.submitError = true;
      }
    });
  }

  get remainingChars(): number {
    return 180 - (this.contactForm.get('message')?.value?.length || 0);
  }
}
