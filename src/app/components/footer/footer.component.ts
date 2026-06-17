import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  navLinks = [
    { label: 'Our Story',  target: 'story' },
    { label: 'Couple',     target: 'couple' },
    { label: 'Events',     target: 'events' },
    { label: 'Gallery',    target: 'gallery' },
    { label: 'Venue',      target: 'venue' },
    { label: 'Family',     target: 'family' },
    { label: 'RSVP',       target: 'rsvp' },
    { label: 'Wishes',     target: 'wishes' },
  ];

  scrollTo(target: string): void {
    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
