import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoupleArtComponent } from '../couple-art/couple-art.component';
import { IllustrationsService } from '../../services/illustrations.service';

interface CountdownUnit {
  label: string;
  value: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CoupleArtComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  // Wedding date — update this to the actual date
  private readonly WEDDING_DATE = new Date('2026-11-26T12:01:00');

  countdown = signal<CountdownUnit[]>([
    { label: 'Days',    value: 0 },
    { label: 'Hours',   value: 0 },
    { label: 'Minutes', value: 0 },
    { label: 'Seconds', value: 0 },
  ]);

  weddingPassed = signal(false);
  private timer?: ReturnType<typeof setInterval>;

  petals = Array.from({ length: 8 }, (_, i) => i);
  illustrations = inject(IllustrationsService);
  heroIllustration = this.illustrations.getById('engagement-ring') ?? this.illustrations.all[0];

  ngOnInit(): void {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const target = this.WEDDING_DATE.getTime();
    const diff = target - now;

    if (diff <= 0) {
      this.weddingPassed.set(true);
      this.countdown.set([
        { label: 'Days',    value: 0 },
        { label: 'Hours',   value: 0 },
        { label: 'Minutes', value: 0 },
        { label: 'Seconds', value: 0 },
      ]);
      return;
    }

    this.countdown.set([
      { label: 'Days',    value: Math.floor(diff / (1000 * 60 * 60 * 24)) },
      { label: 'Hours',   value: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) },
      { label: 'Minutes', value: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) },
      { label: 'Seconds', value: Math.floor((diff % (1000 * 60)) / 1000) },
    ]);
  }

  scrollToRsvp(): void {
    const el = document.getElementById('rsvp');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  scrollDown(): void {
    const el = document.getElementById('story');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
