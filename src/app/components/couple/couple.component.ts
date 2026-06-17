import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoupleArtComponent } from '../couple-art/couple-art.component';
import { IllustrationsService } from '../../services/illustrations.service';

interface Person {
  name: string;
  role: string;
  image: string;
  description: string;
  qualities: string[];
  icon: string;
}

@Component({
  selector: 'app-couple',
  standalone: true,
  imports: [CommonModule, CoupleArtComponent],
  templateUrl: './couple.component.html',
  styleUrl: './couple.component.scss'
})
export class CoupleComponent {
  illustrations = inject(IllustrationsService);
  coupleIllustration = this.illustrations.getById('selfie-together') ?? this.illustrations.all[0];
  forheadIllustration = this.illustrations.getById('forehead-touch') ?? this.illustrations.all[0];

  groom: Person = {
    name: 'Er. Shailesh Mohite',
    role: 'The Groom',
    image: 'assets/images/couple/selfie-together.png',
    description: 'A dedicated Software Engineer with a heart full of love and a mind sharp as a blade. Shailesh brings warmth, laughter, and unwavering loyalty to everything he does. His gentle nature, thoughtfulness, and infectious smile won Shubhangi\'s heart forever.',
    qualities: ['Engineering', 'Passionate', 'Adventurous', 'Caring'],
    icon: 'fa-user-tie',
  };

  bride: Person = {
    name: 'Dr. Shubhangi Pandit',
    role: 'The Bride',
    image: 'assets/images/couple/romantic-embrace.png',
    description: 'A brilliant Doctor whose grace and compassion light up every room. Shubhangi combines intellect with warmth, dedication with joy, and resilience with kindness. Her beautiful soul and loving spirit make her the perfect life partner.',
    qualities: ['Medicine', 'Graceful', 'Compassionate', 'Brilliant'],
    icon: 'fa-user-nurse',
  };
}
