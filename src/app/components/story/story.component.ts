import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StoryEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  side: 'left' | 'right';
}

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent implements AfterViewInit {
  @ViewChildren('timelineItem') items!: QueryList<ElementRef>;

  events: StoryEvent[] = [
    {
      year: '03 May 2026',
      title: 'First Meeting',
      description: 'Two souls destined to meet found each other for the very first time. A moment that neither of them knew would change their lives forever — the beginning of a beautiful love story.',
      image: 'assets/images/couple/selfie-together.png',
      icon: 'fa-star',
      side: 'left'
    },
    {
      year: '10 May 2026',
      title: 'Supari Karyakram',
      description: 'With the blessings of both families and the joy of two households uniting, the auspicious Supari Karyakram marked the formal beginning of Shailesh and Shubhangi\'s journey towards a lifetime together.',
      image: 'assets/images/couple/supari.png',
      icon: 'fa-ring',
      side: 'right'
    },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    this.items.forEach(item => observer.observe(item.nativeElement));
  }
}
