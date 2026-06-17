import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CoupleIllustration {
  id: string;
  label: string;
  svgFile: string;
  pngFile: string;
  description: string;
}

@Component({
  selector: 'app-couple-art',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './couple-art.component.html',
  styleUrl: './couple-art.component.scss'
})
export class CoupleArtComponent {
  @Input() illustration!: CoupleIllustration;
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() animate = true;

  pngFailed = false;

  onPngError(): void {
    this.pngFailed = true;
  }

  get src(): string {
    if (!this.pngFailed) {
      return this.illustration.pngFile;
    }
    return this.illustration.svgFile;
  }
}
