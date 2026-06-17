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
  readonly BASE = 'assets/images/couple';

  // Left column (top to bottom)
  leftSlots: CollageSlot[] = [
    { id: 'engagement-ring',  label: 'Our Engagement',    src: `${this.BASE}/engagement-ring.png`  },
    { id: 'shy-surprise',     label: 'Sweet Surprise',    src: `${this.BASE}/shy-surprise.png`     },
    { id: 'sweet-nuzzle',     label: 'Tender Nuzzle',     src: `${this.BASE}/sweet-nuzzle.png`     },
    { id: 'intimate-close',   label: 'Intimate Moment',   src: `${this.BASE}/intimate-close.png`   },
  ];

  // Right column (top to bottom)
  rightSlots: CollageSlot[] = [
    { id: 'forehead-touch',  label: 'Selfie Time',       src: `${this.BASE}/forehead-touch.png`  },
    { id: 'cheek-kiss',       label: 'Cheek Kiss',        src: `${this.BASE}/cheek-kiss.png`       },
    { id: 'tender-embrace',   label: 'Tender Embrace',    src: `${this.BASE}/tender-embrace.png`   },
    { id: 'loving-moment',    label: 'Loving Moment',     src: `${this.BASE}/loving-moment.png`    },
  ];

  // Bottom row — 3 wide slots
  bottomSlots: CollageSlot[] = [
    { id: 'romantic-embrace', label: 'Romantic Embrace',  src: `${this.BASE}/romantic-embrace.png` },
    { id: 'warm-hug',         label: 'Warm Hug',          src: `${this.BASE}/warm-hug.png`         },
    { id: 'forehead-touch',   label: 'Forehead Touch',    src: `${this.BASE}/forehead-touch.png`   },
    { id: 'selfie-love',      label: 'Selfie Love',       src: `${this.BASE}/selfie-love.png`      },
    { id: 'romantic-close',   label: 'Romantic Close',    src: `${this.BASE}/romantic-close.png`   },
    { id: 'lovers-gaze',      label: "Lover's Gaze",      src: `${this.BASE}/lovers-gaze.png`      },
  ];
}
