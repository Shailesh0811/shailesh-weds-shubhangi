import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  icon: string;
  color: string;
  description: string;
  dress: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events: WeddingEvent[] = [
    {
      title: 'Engagement Ceremony',
      date: 'November 25, 2026',
      time: '11:00 AM onwards',
      venue: 'Baheti Mangal Karyalaya',
      address: 'Bansilal Nagar Walur Road,Sailu, Maharashtra',
      icon: 'fa-ring',
      color: '#C9A84C',
      description: 'The formal exchange of rings marking the beginning of a lifelong commitment, celebrated with family and loved ones.',
      dress: 'Formal Traditional Wear'
    },
    {
      title: 'Haldi & Sangeet Night',
      date: 'November 25, 2026',
      time: '05:00 PM onwards',
      venue: 'Baheti Mangal Karyalaya',
      address: 'Bansilal Nagar Walur Road,Sailu, Maharashtra',
      icon: 'fa-music',
      color: '#F5C842',
      description: 'An evening of vibrant Haldi blessings followed by joyful Sangeet celebrations — music, dance, and unforgettable moments with family.',
      dress: 'Yellow / Bright Colours'
    },
    {
      title: 'Wedding Ceremony',
      date: 'November 26, 2026',
      time: '12:01 PM (Muhurat)',
      venue: 'Baheti Mangal Karyalaya',
      address: 'Bansilal Nagar Walur Road, Sailu, Maharashtra',
      icon: 'fa-church',
      color: '#E8738A',
      description: 'The sacred union where Shailesh and Shubhangi exchange vows in the presence of family, friends, and the divine.',
      dress: 'Traditional Indian Formal'
    },
  ];
}
