import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-centered-carousel',
  imports: [CommonModule],
  templateUrl: './centered-carousel.html',
  styleUrl: './centered-carousel.css',
})
export class CenteredCarousel {
  panels = [
    {
      title: 'Explore The World',
      img: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=1350&q=80',
      active: true
    },
    {
      title: 'Wild Forest',
      img: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=1350&q=80',
      active: false
    },
    {
      title: 'Sunny Beach',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1353&q=80',
      active: false
    },
    {
      title: 'City on Winter',
      img: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=1351&q=80',
      active: false
    },
    {
      title: 'Mountains - Clouds',
      img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1350&q=80',
      active: false
    }
  ];

  activatePanel(index: number) {
    this.panels.forEach((p, i) => p.active = i === index);
  }
}
