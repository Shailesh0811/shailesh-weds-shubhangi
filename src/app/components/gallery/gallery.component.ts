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
    { src: 'assets/images/gallery/together/together-2.jpg', alt: 'Together Forever',   span: 'normal' },
    { src: 'assets/images/gallery/groom/Shailesh.jpg',       alt: 'Er. Shailesh Mohite', span: 'tall'   },
    { src: 'assets/images/gallery/bride/Shubhangi.JPG',      alt: 'Dr. Shubhangi Pandit', span: 'tall'   },
    { src: 'assets/images/gallery/together/together-5.jpg',  alt: 'Forehead Kiss',       span: 'normal' },
    { src: 'assets/images/gallery/together/together-1.jpg',  alt: 'Cheek Kiss',          span: 'normal' },
    { src: 'assets/images/gallery/together/together-6.jpg',  alt: 'Selfie Time',         span: 'normal' },
    { src: 'assets/images/gallery/together/together-3.jpg',  alt: 'Sweet Smiles',        span: 'normal' },
    { src: 'assets/images/gallery/together/together-4.jpg',  alt: 'Close Together',      span: 'normal' },
    { src: 'assets/images/gallery/together/together-7.jpg',  alt: 'Warm Moment',         span: 'normal' },
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
