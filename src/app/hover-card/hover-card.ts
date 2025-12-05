import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { EffectFade, Mousewheel, Pagination } from 'swiper/modules';

export interface BlogSlide {
  image: string;
  date: string;
  title: string;
  text: string;
  link: string;
}


@Component({
  selector: 'app-hover-card',
  imports: [CommonModule],
  templateUrl: './hover-card.html',
  styleUrl: './hover-card.css',
})
export class HoverCardComponent {
  private swiper: Swiper | null = null;

  slides: BlogSlide[] = [
    {
      image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp',
      date: '26 December 2019',
      title: 'Lorem Ipsum Dolor',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
      link: '#'
    },
    {
      image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp',
      date: '26 December 2019',
      title: 'Lorem Ipsum Dolor2',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
      link: '#'
    },
    {
      image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp',
      date: '26 December 2019',
      title: 'Lorem Ipsum Dolor',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // Initialize Swiper after view is ready
    this.swiper = new Swiper('.blog-slider', {
      modules: [Pagination, Mousewheel, EffectFade],
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up Swiper instance
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }
  }
}