import { Component, signal, HostListener, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CollageSlot {
  id: string;
  label: string;
  src: string;
}

@Component({
  selector: 'app-couple-collage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './couple-collage.component.html',
  styleUrl: './couple-collage.component.scss'
})
export class CoupleCollageComponent implements AfterViewInit, OnDestroy {
  readonly BASE = 'assets/images/gallery/together';

  lightboxOpen = signal(false);
  currentIndex = signal(0);
  activeSlide = signal(0);

  @ViewChild('track') private trackRef?: ElementRef<HTMLElement>;
  private autoplayTimer?: ReturnType<typeof setInterval>;
  private readonly AUTOPLAY_MS = 4000;

  // Center feature photo
  centerPhoto = `${this.BASE}/together-2.jpg`;

  // Left column (top to bottom)
  leftSlots: CollageSlot[] = [
    { id: 'together-1', label: '',       src: `${this.BASE}/together-1.jpg` },
    { id: 'together-3', label: '',      src: `${this.BASE}/together-3.jpg` },
    { id: 'together-4', label: '',    src: `${this.BASE}/together-4.jpg` },
  ];

  // Right column (top to bottom)
  rightSlots: CollageSlot[] = [
    { id: 'together-5', label: '', src: `${this.BASE}/together-5.jpg` },
    { id: 'together-6', label: '',   src: `${this.BASE}/together-6.jpg` },
    { id: 'together-7', label: '',   src: `${this.BASE}/together-7.jpg` },
  ];

  // Bottom row — individual portraits
  portraits: CollageSlot[] = [
    { id: 'groom', label: 'Er. Shailesh Mohite',  src: 'assets/images/gallery/groom/Shailesh.jpg' },
    { id: 'bride', label: 'Dr. Shubhangi Pandit', src: 'assets/images/gallery/bride/Shubhangi.JPG' },
  ];

  // Every photo shown in the lightbox, in viewing order
  photos: CollageSlot[] = [
    { id: 'together-2', label: 'Together Forever', src: this.centerPhoto },
    ...this.leftSlots,
    ...this.rightSlots,
    ...this.portraits,
  ];

  open(src: string): void {
    this.currentIndex.set(Math.max(0, this.photos.findIndex(p => p.src === src)));
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  prev(): void {
    this.currentIndex.update(i => (i - 1 + this.photos.length) % this.photos.length);
  }

  next(): void {
    this.currentIndex.update(i => (i + 1) % this.photos.length);
  }

  // Mobile carousel
  ngAfterViewInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayTimer);
  }

  // Advances every 2s; skipped while the carousel is hidden (desktop) or the lightbox is open
  startAutoplay(): void {
    clearInterval(this.autoplayTimer);
    this.autoplayTimer = setInterval(() => {
      const track = this.trackRef?.nativeElement;
      if (!track || !track.clientWidth || this.lightboxOpen()) return;
      this.scrollTo(track, this.activeSlide() + 1);
    }, this.AUTOPLAY_MS);
  }

  onTrackScroll(track: HTMLElement): void {
    this.activeSlide.set(Math.round(track.scrollLeft / track.clientWidth));
  }

  scrollTo(track: HTMLElement, index: number): void {
    const i = (index + this.photos.length) % this.photos.length;
    track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
