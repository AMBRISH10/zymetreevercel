import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
newsletterForm!: FormGroup;
  currentYear: number = new Date().getFullYear();
  isSubmitting: boolean = false;
  subscriptionMessage: string = '';
  subscriptionSuccess: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Initialize the newsletter form with validation
   */
  private initializeForm(): void {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * Get email form control for easy access in template
   */
  get email() {
    return this.newsletterForm.get('email');
  }

  /**
   * Handle newsletter subscription
   */
  onSubscribe(): void {
    if (this.newsletterForm.invalid) {
      this.newsletterForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.subscriptionMessage = '';
    
    const emailValue = this.email?.value;

    // Simulate API call
    setTimeout(() => {
      // In a real application, you would call your API service here
      // Example: this.newsletterService.subscribe(emailValue).subscribe(...)
      
      this.isSubmitting = false;
      this.subscriptionSuccess = true;
      this.subscriptionMessage = 'Successfully subscribed to our newsletter!';
      this.newsletterForm.reset();

      // Clear message after 5 seconds
      setTimeout(() => {
        this.subscriptionMessage = '';
      }, 5000);
    }, 1500);

    // Uncomment and modify for actual API integration:
    /*
    this.newsletterService.subscribe(emailValue).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.subscriptionSuccess = true;
        this.subscriptionMessage = 'Successfully subscribed to our newsletter!';
        this.newsletterForm.reset();
        
        setTimeout(() => {
          this.subscriptionMessage = '';
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.subscriptionSuccess = false;
        this.subscriptionMessage = 'Subscription failed. Please try again.';
        
        setTimeout(() => {
          this.subscriptionMessage = '';
        }, 5000);
      }
    });
    */
  }

  /**
   * Handle navigation clicks
   * @param event - Click event
   * @param route - Route to navigate to
   */
  navigate(event: Event, route: string): void {
    event.preventDefault();
    
    // In a real application, use Angular Router
    console.log(`Navigating to: ${route}`);
    
    // Example with Angular Router:
    // this.router.navigate([`/${route}`]);
    
    // For now, just scroll to top or handle as needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
