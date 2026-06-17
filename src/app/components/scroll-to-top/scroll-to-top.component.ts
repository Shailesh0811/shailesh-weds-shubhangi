import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (visible()) {
      <button
        class="scroll-top"
        (click)="scrollTop()"
        aria-label="Scroll to top"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    }
  `,
  styles: [`
    .scroll-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 999;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-gold-light), var(--color-gold-dark));
      border: none;
      color: white;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: var(--shadow-gold);
      transition: var(--transition);
      animation: fadeInUp 0.4s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(201,168,76,0.5);
      }

      &:active { transform: scale(0.95); }
    }
  `]
})
export class ScrollToTopComponent {
  visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 400);
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
