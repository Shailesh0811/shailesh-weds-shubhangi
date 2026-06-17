import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoupleArtComponent } from '../couple-art/couple-art.component';
import { IllustrationsService } from '../../services/illustrations.service';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CoupleArtComponent],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  illustrations = inject(IllustrationsService);
  rsvpIllustration = this.illustrations.getById('shy-surprise') ?? this.illustrations.all[0];

  form: FormGroup;
  submitted = signal(false);
  success = signal(false);
  loading = signal(false);

  attendance = [
    { value: 'yes-all', label: 'Attending All Events', icon: 'fa-check-circle' },
    { value: 'yes-wedding', label: 'Wedding Day Only', icon: 'fa-place-of-worshipfa-solid fa-gopuram' },
    { value: 'no', label: 'Unable to Attend', icon: 'fa-times-circle' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:      ['', [Validators.required, Validators.minLength(2)]],
      phone:     ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email:     ['', [Validators.email]],
      guests:    [1, [Validators.required, Validators.min(1), Validators.max(10)]],
      attending: ['yes-all', [Validators.required]],
      message:   ['', [Validators.maxLength(300)]],
    });
  }

  get f() { return this.form.controls; }

  decrementGuests(): void {
    const current = this.f['guests'].value as number;
    if (current > 1) this.f['guests'].setValue(current - 1);
  }

  incrementGuests(): void {
    const current = this.f['guests'].value as number;
    if (current < 10) this.f['guests'].setValue(current + 1);
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted()));
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;

    this.loading.set(true);
    // Simulate async submission
    setTimeout(() => {
      this.loading.set(false);
      this.success.set(true);
    }, 1500);
  }

  reset(): void {
    this.form.reset({ guests: 1, attending: 'yes-all' });
    this.submitted.set(false);
    this.success.set(false);
  }
}
