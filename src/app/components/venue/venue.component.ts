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
    { icon: 'fa-users', label: '500+ Guests', desc: 'Spacious venue' },
    { icon: 'fa-parking', label: 'Ample Parking', desc: 'Free parking available' },
    { icon: 'fa-utensils', label: 'Catering', desc: 'In-house catering' },
    { icon: 'fa-snowflake', label: 'AC Hall', desc: 'Climate controlled' },
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=Baheti+Mangal+Karyalaya+Sailu+Maharashtra&output=embed&z=16'
    );
  }

  openDirections(): void {
    window.open(this.venue.mapLink, '_blank', 'noopener,noreferrer');
  }
}
