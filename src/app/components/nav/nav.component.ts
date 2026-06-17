import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

interface NavItem {
  label: string;
  target: string;
  icon: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  theme = inject(ThemeService);

  isScrolled = signal(false);
  menuOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Our Story',  target: 'story',   icon: 'fa-heart' },
    { label: 'Moments',    target: 'collage', icon: 'fa-images' },
    { label: 'Couple',     target: 'couple',  icon: 'fa-ring' },
    { label: 'Events',     target: 'events',  icon: 'fa-calendar' },
    { label: 'Gallery',    target: 'gallery', icon: 'fa-camera' },
    { label: 'Venue',      target: 'venue',   icon: 'fa-map-marker-alt' },
    { label: 'Family',     target: 'family',  icon: 'fa-users' },
    { label: 'RSVP',       target: 'rsvp',    icon: 'fa-envelope' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  scrollTo(target: string): void {
    this.menuOpen.set(false);
    const el = document.getElementById(target);
    if (el) {
      const offset = 70;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
