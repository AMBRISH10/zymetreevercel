import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CenteredCarousel } from "../centered-carousel/centered-carousel";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ProductCard {
  id: string;
  title: string;
  description: string;
  image: string;
  route: string;
}

interface MainCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  products: ProductCard[];
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, CenteredCarousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  words: string[] = ['work', 'lifestyle', 'everything'];

  showModal = false;
  selectedCard: MainCard | null = null;

  mainCards: MainCard[] = [
    {
      id: 'products',
      title: 'Products',
      subtitle: 'Eco-friendly microbial solutions',
      description: 'Our products are developed using advanced microbial consortia designed to improve waste treatment, soil health, and environmental sustainability. Safe, effective, and designed for industrial and domestic applications.',
      image: '../../assets/products.png',
      color: 'blue',
      products: [
        {
          id: 'prod1',
          title: 'Speciality Chemicals',
          description: 'Advanced microbial formula for organic waste decomposition',
          image: 'assets/chemicals.jpg',
          route: '/products/speciality-chemicals'
        },
        {
          id: 'prod2',
          title: 'BioCulture for Wastewater Treatment',
          description: 'Microbial consortia for improved soil health',
          image: 'assets/bioculture.webp',
          route: '/products/bioculture'
        },
        {
          id: 'prod3',
          title: 'Homecare/Housekeeping',
          description: 'Biological solution for water treatment',
          image: 'assets/agro.webp',
          route: '/products/home-care-products'
        },
        {
          id: 'prod3',
          title: 'Personal Care',
          description: 'Biological solution for water treatment',
          image: 'assets/personalCare.jpg',
          route: '/products/personal-care'
        },
        {
          id: 'prod3',
          title: 'AGRO',
          description: 'Biological solution for water treatment',
          image: 'assets/agro1.jpg',
          route: '/products/agro'
        },
        {
          id: 'prod3',
          title: 'Chemicals For Cleaning',
          description: 'Biological solution for water treatment',
          image: 'assets/chemicalsforclean.jpg',
          route: '/products/water-purification'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      subtitle: 'End-to-end eco solutions',
      description: 'We offer professional services in waste treatment, environmental consultation, and microbial solution implementation. Our services help industries and communities move towards cleaner and greener operations.',
      image: '../../assets/services.png',
      color: 'red',
      products: [
        {
          id: 'serv1',
          title: 'Environment Management Consultancy',
          description: 'Expert consultation for waste management systems',
          image: 'assets/environmental.avif',
          route: '/services/environment'
        },
        {
          id: 'serv2',
          title: 'Wastewater Treatment Consultancy',
          description: 'On-site implementation and training services',
          image: 'assets/wastewater.jpg',
          route: '/services/wastewater'
        },
        {
          id: 'serv3',
          title: 'Biofertilizer Production Consultancy',
          description: 'Comprehensive environmental assessment services',
          image: 'assets/biofertilizer.png',
          route: '/services/biofertilizer'
        },
        {
          id: 'serv3',
          title: 'Consultancy for Essential Oil Production',
          description: 'Comprehensive environmental assessment services',
          image: 'assets/essentialOil.jpg',
          route: '/services/essential-oil'
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      subtitle: 'Sustainability in action',
      description: 'Zymetree actively works on environmental projects focused on waste reduction, recycling, and biological reuse. Our projects demonstrate real-world impact through innovative and sustainable practices.',
      image: '../../assets/projects.png',
      color: 'green',
      products: [
        {
          id: 'proj1',
          title: 'Improve (Wetland Water Treatment)',
          description: 'Large-scale industrial waste treatment project',
          image: 'assets/wetland.jpg',
          route: '/projects/improve'
        },
        {
          id: 'proj2',
          title: 'Electrocoagulation for Wastewater Treatment',
          description: 'Community-based organic waste management',
          image: 'assets/electro.webp',
          route: '/projects/electrocoagulation'
        },
        {
          id: 'proj3',
          title: 'MBR for STP & ETP',
          description: 'Soil improvement in agricultural regions',
          image: 'assets/MBR.jpg',
          route: '/projects/mbr'
        },
        {
          id: 'proj3',
          title: 'Online Water Quality Monitoring System',
          description: 'Soil improvement in agricultural regions',
          image: 'assets/waterQuality.jpg',
          route: '/projects/monitoring'
        }
      ]
    }
  ];

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.bgVideo.nativeElement;
    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.warn('Autoplay blocked');
      });
    }
  }

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

  constructor(private router: Router) { }

  /////////////////////////////////////////////////////////////////////////////////////

  openModal(card: MainCard): void {
    this.selectedCard = card;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedCard = null;
    document.body.style.overflow = 'auto';
  }

  navigateToProduct(route: string): void {
    this.closeModal();
    this.router.navigate([route]);
  }
}
