import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataService } from '../dataservice.service'; // ← adjust path if needed

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  contactForm: FormGroup;

  purposes = [
    'General enquiry',
    'Sales enquiry',
    'Support request',
    'Partnership',
    'Other'
  ];

  constructor(private fb: FormBuilder, private dataService: DataService) {
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

    const formData = this.contactForm.value;

    // POST to Express server → saves to data.json
    this.dataService.saveFormData(formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Submitted!',
          text: 'Your enquiry has been sent successfully.',
          confirmButtonColor: '#28a745'
        });
        this.contactForm.reset();
      },
      error: (err:any) => {
        console.error('Submission error:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong. Please try again.',
          confirmButtonColor: '#dc3545'
        });
      }
    });
  }

  get remainingChars(): number {
    return 180 - (this.contactForm.get('message')?.value?.length || 0);
  }
}