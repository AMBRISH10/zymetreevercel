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
      subtitle: '',
      description: 'Our products are developed using advanced microbial consortia designed to improve waste treatment, soil health, and environmental sustainability. Safe, effective, and designed for industrial and domestic applications.',
      image: '../../assets/products.png',
      color: 'blue',
      products: [
        {
          id: 'prod1',
          title: 'Speciality Chemicals',
          description: 'Advanced specialty chemical solutions for efficient RO systems, boiler performance, and cooling tower protection.',
          image: 'assets/chemicals.jpg',
          route: '/products/speciality-chemicals'
        },
        {
          id: 'prod2',
          title: 'BioCulture for Wastewater Treatment',
          description: 'High-performance bio culture solutions for efficient and eco-friendly wastewater treatment',
          image: 'assets/products/bioculturewastewater.jpg',
          route: '/products/bioculture'
        },
        {
          id: 'prod3',
          title: 'Homecare/Housekeeping',
          description: 'High-quality home care and housekeeping solutions designed for superior cleanliness, hygiene, and long-lasting freshness.',
          image: 'assets/products/honmecare.jpg',
          route: '/products/home-care-products'
        },
        {
          id: 'prod3',
          title: 'Personal Care',
          description: 'Advanced personal care solutions designed for effective cleansing, skin nourishment, and lasting freshness.',
          image: 'assets/personalCare.jpg',
          route: '/products/personal-care'
        },
        {
          id: 'prod3',
          title: 'AGRO',
          description: 'Comprehensive agri-biological solutions including bio fertilizers, micronutrients, bio-control microbes, soil conditioners, and bio-stimulants to maximize crop health and yield.',
          image: 'assets/agro1.jpg',
          route: '/products/agro'
        },
        {
          id: 'prod3',
          title: 'Chemicals For Cleaning',
          description: 'Premium-grade chemical raw materials designed for superior cleaning performance and formulation stability.',
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
          description: 'Environmental management and consultation specialist with expertise in advising on sustainable product strategies and regulatory compliance.s',
          image: 'assets/environmental.avif',
          route: '/services/environment'
        },
        {
          id: 'serv2',
          title: 'Wastewater Treatment Consultancy',
          description: 'Wastewater treatment consultant specializing in process optimization, regulatory compliance, and sustainable environmental solutions',
          image: 'assets/wastewater.jpg',
          route: '/services/wastewater'
        },
        {
          id: 'serv3',
          title: 'Biofertilizer Production Consultancy',
          description: 'Bio-fertilizer production consultancy providing end-to-end support in plant setup, microbial formulation, and regulatory compliance',
          image: 'assets/biofertilizer.png',
          route: '/services/biofertilizer'
        },
        {
          id: 'serv3',
          title: 'Consultancy for Essential Oil Production',
          description: 'Specialized consultancy for essential oil manufacturing, offering expertise in distillation technology, process optimization, and regulatory approvals.',
          image: 'assets/essentialOil.jpg',
          route: '/services/essential-oil'
        }
      ]
    },
    // {
    //   id: 'projects',
    //   title: 'Projects',
    //   subtitle: 'Sustainability in action',
    //   description: 'Zymetree actively works on environmental projects focused on waste reduction, recycling, and biological reuse. Our projects demonstrate real-world impact through innovative and sustainable practices.',
    //   image: '../../assets/projects.png',
    //   color: 'green',
    //   products: [
    //     {
    //       id: 'proj1',
    //       title: 'Improve (Wetland Water Treatment)',
    //       description: 'Large-scale industrial waste treatment project',
    //       image: 'assets/wetland.jpg',
    //       route: '/projects/improve'
    //     },
    //     {
    //       id: 'proj2',
    //       title: 'Electrocoagulation for Wastewater Treatment',
    //       description: 'Community-based organic waste management',
    //       image: 'assets/electro.webp',
    //       route: '/projects/electrocoagulation'
    //     },
    //     {
    //       id: 'proj3',
    //       title: 'MBR for STP & ETP',
    //       description: 'Soil improvement in agricultural regions',
    //       image: 'assets/MBR.jpg',
    //       route: '/projects/mbr'
    //     },
    //     {
    //       id: 'proj3',
    //       title: 'Online Water Quality Monitoring System',
    //       description: 'Soil improvement in agricultural regions',
    //       image: 'assets/waterQuality.jpg',
    //       route: '/projects/monitoring'
    //     }
    //   ]
    // }
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
