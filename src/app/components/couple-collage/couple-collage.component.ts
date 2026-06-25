import { Component } from '@angular/core';
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
export class CoupleCollageComponent {
  readonly BASE = 'assets/images/gallery/together';

  // Center feature photo
  centerPhoto = `${this.BASE}/together-2.jpg`;

  // Left column (top to bottom)
  leftSlots: CollageSlot[] = [
    { id: 'together-1', label: 'Cheek Kiss',       src: `${this.BASE}/together-1.jpg` },
    { id: 'together-2', label: 'Together Forever', src: `${this.BASE}/together-2.jpg` },
    { id: 'together-3', label: 'Sweet Smiles',      src: `${this.BASE}/together-3.jpg` },
    { id: 'together-4', label: 'Close Together',    src: `${this.BASE}/together-4.jpg` },
  ];

  // Right column (top to bottom)
  rightSlots: CollageSlot[] = [
    { id: 'together-5', label: 'Forehead Kiss', src: `${this.BASE}/together-5.jpg` },
    { id: 'together-6', label: 'Selfie Time',   src: `${this.BASE}/together-6.jpg` },
    { id: 'together-7', label: 'Warm Moment',   src: `${this.BASE}/together-7.jpg` },
    // { id: 'together-1', label: 'Cheek Kiss',    src: `${this.BASE}/together-1.jpg` },
  ];

  // Bottom row — 6 slots
  bottomSlots: CollageSlot[] = [
    { id: 'together-2', label: 'Together Forever', src: `${this.BASE}/together-2.jpg` },
    { id: 'together-3', label: 'Sweet Smiles',      src: `${this.BASE}/together-3.jpg` },
    { id: 'together-4', label: 'Close Together',    src: `${this.BASE}/together-4.jpg` },
    { id: 'together-5', label: 'Forehead Kiss',     src: `${this.BASE}/together-5.jpg` },
    { id: 'together-6', label: 'Selfie Time',       src: `${this.BASE}/together-6.jpg` },
    { id: 'together-7', label: 'Warm Moment',       src: `${this.BASE}/together-7.jpg` },
  ];
}
