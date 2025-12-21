import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule,ReactiveFormsModule],
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
    console.log(this.contactForm.value);
  }

  get remainingChars(): number {
    return 180 - (this.contactForm.get('message')?.value?.length || 0);
  }
}
