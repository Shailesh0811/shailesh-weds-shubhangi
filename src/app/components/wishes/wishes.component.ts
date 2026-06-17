import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-wishes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.scss'
})
export class WishesComponent {
  wishesService = inject(WishesService);
  form: FormGroup;
  submitted = signal(false);
  justAdded = signal(false);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
    });
  }

  get f() { return this.form.controls; }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted()));
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;

    this.wishesService.add(this.f['name'].value, this.f['message'].value);
    this.form.reset();
    this.submitted.set(false);
    this.justAdded.set(true);
    setTimeout(() => this.justAdded.set(false), 3000);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    }).format(new Date(date));
  }

  getInitials(name: string): string {
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
  }
}
