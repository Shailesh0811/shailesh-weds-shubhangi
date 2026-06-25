import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.scss'
})
export class VenueComponent {
  mapUrl: SafeResourceUrl;

  venue = {
    name: 'Baheti Mangal Karyalaya',
    address: 'Bansilal Nagar Walur, Road,',
    city: 'Sailu, Maharashtra – 431 503',
    state: 'Maharashtra, India',
    phone: '+91 98608 93832',
    email: 'shailesh.mohite7543@gmail.com',
    mapLink: 'https://maps.app.goo.gl/Q7HL2a9Hv3sys3187'
  };

  features = [
    { icon: 'fa-users', label: '1100+ Guests', desc: 'Spacious venue' },
    { icon: 'fa-parking', label: 'Ample Parking', desc: 'Free parking available' },
    { icon: 'fa-utensils', label: 'Catering', desc: 'In-house catering' }
  ];

  transportOptions = [
    {
      icon: 'fa-train',
      title: 'By Train',
      primary: 'Selu Railway Station',
      details: [
        'Located right in Sailu town, on the Parbhani–Manmad line.',
        'Well connected to Parbhani Junction for onward connections from major cities.'
      ],
      mapLink: 'https://maps.app.goo.gl/BPJNTDabofvkhCjw6'
    },
    {
      icon: 'fa-bus',
      title: 'By Bus (Travels)',
      primary: 'Sailu (Selu) Main Bus Stand',
      details: [
        'Direct state transport (ST) buses connect Sailu to Parbhani, Jintur, Manwath, Pathri and nearby towns.',
        'Parbhani (~40 km away) is well served by state and private buses from Pune, Mumbai, Aurangabad and other major cities — take a connecting bus or cab onward to Sailu.'
      ]
    },
    {
      icon: 'fa-car',
      title: 'Self Drive',
      primary: 'Drive down via state highways',
      details: [
        'Pune — 365 km',
        'Kolhapur — 490 km',
        'Tuljapur — 209 km'
      ],
      note: 'Free parking is available at the venue.'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=Baheti+Mangal+Karyalaya+Sailu+Maharashtra&output=embed&z=16'
    );
  }

  openDirections(): void {
    window.open(this.venue.mapLink, '_blank', 'noopener,noreferrer');
  }

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
