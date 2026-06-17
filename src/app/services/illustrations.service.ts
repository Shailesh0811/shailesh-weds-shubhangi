import { Injectable } from '@angular/core';
import { CoupleIllustration } from '../components/couple-art/couple-art.component';

@Injectable({ providedIn: 'root' })
export class IllustrationsService {
  private readonly BASE = 'assets/images/couple';

  all: CoupleIllustration[] = [
    {
      id: 'engagement-ring',
      label: 'Engagement Ring',
      svgFile: '',
      pngFile: `${this.BASE}/engagement-ring.png`,
      description: 'Couple at engagement ring ceremony'
    },
    {
      id: 'selfie-together',
      label: 'Selfie Together',
      svgFile: '',
      pngFile: `${this.BASE}/selfie-together.png`,
      description: 'Couple taking a romantic selfie'
    },
    {
      id: 'shy-surprise',
      label: 'Sweet Surprise',
      svgFile: '',
      pngFile: `${this.BASE}/shy-surprise.png`,
      description: 'Bride in shy surprise with groom'
    },
    {
      id: 'cheek-kiss',
      label: 'Cheek Kiss',
      svgFile: '',
      pngFile: `${this.BASE}/cheek-kiss.png`,
      description: 'Romantic cheek kiss'
    },
    {
      id: 'sweet-nuzzle',
      label: 'Sweet Nuzzle',
      svgFile: '',
      pngFile: `${this.BASE}/sweet-nuzzle.png`,
      description: 'Sweet nuzzle together'
    },
    {
      id: 'tender-embrace',
      label: 'Tender Embrace',
      svgFile: '',
      pngFile: `${this.BASE}/tender-embrace.png`,
      description: 'Tender romantic embrace'
    },
    {
      id: 'intimate-close',
      label: 'Intimate Moment',
      svgFile: '',
      pngFile: `${this.BASE}/intimate-close.png`,
      description: 'Intimate close moment'
    },
    {
      id: 'loving-moment',
      label: 'Loving Moment',
      svgFile: '',
      pngFile: `${this.BASE}/loving-moment.png`,
      description: 'Loving romantic moment'
    },
    {
      id: 'romantic-embrace',
      label: 'Romantic Embrace',
      svgFile: '',
      pngFile: `${this.BASE}/romantic-embrace.png`,
      description: 'Romantic full embrace'
    },
    {
      id: 'selfie-love',
      label: 'Selfie Love',
      svgFile: '',
      pngFile: `${this.BASE}/selfie-love.png`,
      description: 'Fun selfie moment'
    },
    {
      id: 'warm-hug',
      label: 'Warm Hug',
      svgFile: '',
      pngFile: `${this.BASE}/warm-hug.png`,
      description: 'Warm loving hug'
    },
    {
      id: 'romantic-close',
      label: 'Romantic Close',
      svgFile: '',
      pngFile: `${this.BASE}/romantic-close.png`,
      description: 'Romantically close together'
    },
    {
      id: 'lovers-gaze',
      label: 'Lovers Gaze',
      svgFile: '',
      pngFile: `${this.BASE}/lovers-gaze.png`,
      description: 'Loving gaze at each other'
    },
    {
      id: 'forehead-touch',
      label: 'Forehead Touch',
      svgFile: '',
      pngFile: `${this.BASE}/forehead-touch.png`,
      description: 'Romantic forehead touch'
    },
  ];

  getById(id: string): CoupleIllustration | undefined {
    return this.all.find(i => i.id === id);
  }
}
