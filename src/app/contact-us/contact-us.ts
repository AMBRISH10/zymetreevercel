import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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

  constructor(private fb: FormBuilder) {
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

    // Get existing data
    let contactList = JSON.parse(localStorage.getItem('contactDetails') || '[]');

    // Add new data
    contactList.push(formData);

    // Save back to localStorage
    localStorage.setItem('contactDetails', JSON.stringify(contactList));

    // alert('✅ Your message has been submitted successfully!');
    Swal.fire({
      icon: 'success',
      title: 'Submitted!',
      text: 'Your enquiry has been sent successfully.',
      confirmButtonColor: '#28a745'
    });

    this.contactForm.reset();
  }

  get remainingChars(): number {
    return 180 - (this.contactForm.get('message')?.value?.length || 0);
  }
}
