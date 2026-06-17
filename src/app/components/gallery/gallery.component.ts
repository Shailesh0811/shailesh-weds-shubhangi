import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  src: string;
  alt: string;
  span: 'wide' | 'tall' | 'normal';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  lightboxOpen = signal(false);
  currentIndex = signal(0);

  items: GalleryItem[] = [
    { src: 'assets/images/couple/romantic-embrace.png',  alt: 'Romantic Embrace',   span: 'wide'   },
    { src: 'assets/images/couple/selfie-together.png',   alt: 'Selfie Together',     span: 'normal' },
    { src: 'assets/images/couple/engagement-ring.png',   alt: 'Engagement Ring',     span: 'tall'   },
    { src: 'assets/images/couple/shy-surprise.png',      alt: 'Sweet Surprise',      span: 'normal' },
    { src: 'assets/images/couple/cheek-kiss.png',        alt: 'Cheek Kiss',          span: 'normal' },
    { src: 'assets/images/couple/selfie-love.png',       alt: 'Selfie Love',         span: 'wide'   },
    { src: 'assets/images/couple/warm-hug.png',          alt: 'Warm Hug',            span: 'normal' },
    { src: 'assets/images/couple/forehead-touch.png',    alt: 'Forehead Touch',      span: 'tall'   },
    { src: 'assets/images/couple/lovers-gaze.png',       alt: "Lover's Gaze",        span: 'normal' },
    { src: 'assets/images/couple/sweet-nuzzle.png',      alt: 'Sweet Nuzzle',        span: 'normal' },
    { src: 'assets/images/couple/tender-embrace.png',    alt: 'Tender Embrace',      span: 'wide'   },
    { src: 'assets/images/couple/romantic-close.png',    alt: 'Romantic Close',      span: 'normal' },
    { src: 'assets/images/couple/intimate-close.png',    alt: 'Intimate Moment',     span: 'normal' },
    { src: 'assets/images/couple/loving-moment.png',     alt: 'Loving Moment',       span: 'normal' },
  ];

  placeholderIcons = ['fa-heart', 'fa-camera', 'fa-star', 'fa-ring', 'fa-sun', 'fa-music', 'fa-flower', 'fa-diamond', 'fa-camera-retro'];

  open(index: number): void {
    this.currentIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  prev(): void {
    this.currentIndex.update(i => (i - 1 + this.items.length) % this.items.length);
  }

  next(): void {
    this.currentIndex.update(i => (i + 1) % this.items.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }

  trackByIndex(index: number): number { return index; }
}
