import { Injectable, signal } from '@angular/core';

export interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

@Injectable({ providedIn: 'root' })
export class WishesService {
  private readonly STORAGE_KEY = 'wedding-wishes';
  wishes = signal<Wish[]>([]);

  constructor() {
    this.load();
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Wish[];
        this.wishes.set(parsed.map(w => ({ ...w, timestamp: new Date(w.timestamp) })));
      }
    } catch {
      this.wishes.set([]);
    }
  }

  add(name: string, message: string): void {
    const wish: Wish = {
      id: crypto.randomUUID(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date()
    };
    this.wishes.update(list => [wish, ...list]);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.wishes()));
  }
}
