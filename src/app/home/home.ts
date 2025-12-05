import { Component, HostListener } from '@angular/core';
import { CenteredCarousel } from "../centered-carousel/centered-carousel";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CenteredCarousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  words: string[] = ['work', 'lifestyle', 'everything'];

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY;

    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    if (section1) {
      section1.style.backgroundPositionY = -(scrollPosition * 0.4) + 'px';
    }

    if (section2) {
      section2.style.backgroundPositionY = -(scrollPosition * 0.6) + 'px';
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////

  
}
