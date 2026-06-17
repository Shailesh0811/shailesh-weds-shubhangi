import { Component, OnInit, inject } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { StoryComponent } from './components/story/story.component';
import { CoupleComponent } from './components/couple/couple.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VenueComponent } from './components/venue/venue.component';
import { FamilyComponent } from './components/family/family.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { WishesComponent } from './components/wishes/wishes.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { CoupleCollageComponent } from './components/couple-collage/couple-collage.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    StoryComponent,
    CoupleComponent,
    EventsComponent,
    GalleryComponent,
    VenueComponent,
    FamilyComponent,
    RsvpComponent,
    WishesComponent,
    CoupleCollageComponent,
    FooterComponent,
    ScrollToTopComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private theme = inject(ThemeService);

  ngOnInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Re-observe on route changes (for SPA)
    const observe = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });
    };

    observe();
    // Re-observe after initial render
    setTimeout(observe, 500);
  }
}
