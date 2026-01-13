import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

interface Product {
  name: string;
  desc: string;
}

interface TabContent {
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  note?: string;
  benefits?: string[];
  icon: string;
}

interface ProductImage {
  label: string;
  size: string;
  containerSize: string;
  cardClass: string;
  boxClass: string;
  imageUrl?: string; // Optional: if you have actual images
}

@Component({
  selector: 'app-bioculture',
  imports: [CommonModule],
  templateUrl: './bioculture.html',
  styleUrl: './bioculture.css',
})
export class Bioculture {
  activeTab: string = 'stp';
  isVisible: { [key: string]: boolean } = {};
  private observer!: IntersectionObserver;

  // Fullscreen image popup properties
  isImagePopupOpen: boolean = false;
  selectedImage: ProductImage | null = null;

  showDescription = false;

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

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  products: { [key: string]: Product[] } = {
    stp: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    etp: [
      { name: 'Zymetreat AS-R01', desc: 'Antiscalant' },
      { name: 'Zymetreat MB-R02', desc: 'Bio Dispersant' },
      { name: 'Zymetreat MB-R01', desc: 'Biocide' }
    ],
    boiler: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    speticTank: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    pond: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    deOdour: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    bioNutrient: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ]
  };

  // Product images for each tab
  productImages: { [key: string]: ProductImage[] } = {
    stp: [
      {
        label: 'Car Wash Shampoo',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Car-Wash-Shampoo_500mL.jpeg'
      },
      {
        label: 'Car Wash Shampoo',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Car-Wash-Shampoo_5L.jpeg'
      },
      {
        label: 'Dashboard Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Dashboard-Polish_5L.jpg.jpeg'
      },
      {
        label: 'Car Tyre Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Car-Tyre-Polish_5L.jpeg'
      },
      {
        label: 'Automobile Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Automobile-Polish_5L.jpg.jpeg'
      },
      {
        label: 'Tyre Polish',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/biocul/stp/Tyre-Polish_500mL.jpg.jpeg'
      },
      {
        label: 'Seat Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Seat-Polish_5L-150x150.jpg.jpeg'
      },
      {
        label: 'Water Less Car Wash',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Water-Less-Car-Wash_500mL.jpeg'
      },
      {
        label: 'Car Wash Shampoo',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Car-Wash-Shampoo_5L-150x150.jpeg'
      },
      {
        label: 'Automobile Freshener',
        size: '250 mL Bottle',
        containerSize: '250mL',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Automobile-Freshener_250mL-600x600.jpeg'
      },
      {
        label: 'Car Tyre Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Car-Tyre-Polish_5L-150x150.jpeg'
      },
      {
        label: 'Dashboard Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/biocul/stp/Dashboard-Polish_5L.jpg.jpeg'
      },
      {
        label: 'Car Wash Shampoo',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Car-Wash-Shampoo_500mL.jpeg'
      },
      {
        label: 'Tyre Polish',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Tyre-Polish_500mL.jpg.jpeg'
      },
      {
        label: 'Water Less Car Wash',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Water-Less-Car-Wash_500mL.jpeg'
      },
      {
        label: 'Automobile Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Automobile-Polish_5L.jpg.jpeg'
      },
      {
        label: 'Seat Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Seat-Polish_5L-150x150.jpg.jpeg'
      },
      {
        label: 'Automobile Freshener',
        size: '250 mL Bottle',
        containerSize: '250mL',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/biocul/stp/Automobile-Freshener_250mL-600x600.jpeg'
      }
    ],
    etp: [
      {
        label: 'Car Tyre Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Car-Tyre-Polish_5L.jpeg'
      },
      {
        label: 'Automobile Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Automobile-Polish_5L.jpg.jpeg'
      },
      {
        label: 'Tyre Polish',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/biocul/stp/Tyre-Polish_500mL.jpg.jpeg'
      }
    ],
    speticTank: [
      {
        label: 'Seat Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Seat-Polish_5L-150x150.jpg.jpeg'
      },
      {
        label: 'Water Less Car Wash',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Water-Less-Car-Wash_500mL.jpeg'
      },
      {
        label: 'Car Wash Shampoo',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Car-Wash-Shampoo_5L-150x150.jpeg'
      }
    ],
    pond: [
      {
        label: 'Automobile Freshener',
        size: '250 mL Bottle',
        containerSize: '250mL',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Automobile-Freshener_250mL-600x600.jpeg'
      },
      {
        label: 'Car Tyre Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Car-Tyre-Polish_5L-150x150.jpeg'
      },
      {
        label: 'Dashboard Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/biocul/stp/Dashboard-Polish_5L.jpg.jpeg'
      }
    ],
    deOdour: [
      {
        label: 'Car Wash Shampoo',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Car-Wash-Shampoo_500mL.jpeg'
      },
      {
        label: 'Tyre Polish',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Tyre-Polish_500mL.jpg.jpeg'
      },
      {
        label: 'Water Less Car Wash',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Water-Less-Car-Wash_500mL.jpeg'
      }
    ],
    bioNutrient: [
      {
        label: 'Automobile Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/stp/Automobile-Polish_5L.jpg.jpeg'
      },
      {
        label: 'Seat Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/stp/Seat-Polish_5L-150x150.jpg.jpeg'
      },
      {
        label: 'Automobile Freshener',
        size: '250 mL Bottle',
        containerSize: '250mL',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/biocul/stp/Automobile-Freshener_250mL-600x600.jpeg'
      }
    ]
  };

  tabContent: { [key: string]: TabContent } = {
    stp: {
      title: 'STP',
      subtitle: 'Efficient Sewage Treatment Plant (STP) Solutions',
      description: 'Our Sewage Treatment Plant (STP) solutions are designed to treat domestic and commercial wastewater effectively, ensuring compliance with environmental standards. Untreated sewage can lead to foul odor, health hazards, and environmental pollution.',
      highlight: 'We provide customized STP treatment chemicals and bio-solutions that enhance treatment efficiency, reduce sludge volume, and ensure clear, odor-free discharge water suitable for reuse.',
      icon: 'zap'
    },

    etp: {
      title: 'ETP',
      subtitle: 'Reliable Effluent Treatment Plant (ETP) Solutions',
      description: 'Industrial effluents often contain harmful chemicals, oils, heavy metals, and organic pollutants. Our Effluent Treatment Plant (ETP) solutions help industries treat wastewater efficiently before discharge or reuse.',
      highlight: 'Our ETP chemical programs improve contaminant removal, ensure regulatory compliance, and support sustainable water management while reducing operational costs.',
      note: 'Proper treatment prevents environmental damage and avoids penalties due to non-compliance.',
      icon: 'droplets'
    },

    speticTank: {
      title: 'Septic Tank',
      subtitle: 'Advanced Septic Tank Treatment & Maintenance Solutions',
      description: 'Septic tanks can develop issues such as clogging, foul odors, and slow decomposition due to poor bacterial activity. Our septic tank treatment solutions enhance natural biodegradation of waste.',
      highlight: 'Using our bio-enzymes and bacterial formulations, septic tanks remain odor-free, require less frequent cleaning, and operate more efficiently.',
      benefits: [
        'Improves waste decomposition and reduces sludge buildup.',
        'Eliminates foul odors and blockages.',
        'Extends septic tank life and lowers maintenance frequency.'
      ],
      icon: 'shield'
    },

    pond: {
      title: 'Pond',
      subtitle: 'Pond & Water Body Treatment Solutions',
      description: 'Stagnant ponds and water bodies often suffer from algae growth, foul smell, mosquito breeding, and poor water quality. Our pond treatment solutions help restore ecological balance.',
      highlight: 'We offer eco-friendly pond treatment chemicals and bio-products that control algae, improve water clarity, and eliminate odor without harming aquatic life.',
      benefits: [
        'Controls algae and organic sludge.',
        'Improves dissolved oxygen levels.',
        'Prevents mosquito breeding and foul odor.'
      ],
      icon: 'shield'
    },

    deOdour: {
      title: 'De Odour',
      subtitle: 'Effective Industrial & Environmental Odor Control',
      description: 'Unpleasant odors from STPs, ETPs, garbage areas, and industrial processes can impact workplace safety and surrounding communities. Our deodorization solutions neutralize odor at the source.',
      highlight: 'We provide advanced odor control chemicals and bio-deodorizers that safely eliminate foul smells and improve air quality.',
      benefits: [
        'Neutralizes odor-causing gases effectively.',
        'Safe for humans and the environment.',
        'Ideal for STP, ETP, landfills, and waste zones.'
      ],
      icon: 'shield'
    },

    bioNutrient: {
      title: 'Bio Nutrient',
      subtitle: 'Biological Nutrients for Enhanced Wastewater Treatment',
      description: 'Biological treatment systems require the right balance of nutrients for microorganisms to perform efficiently. Our bio-nutrients support healthy microbial growth in STP and ETP processes.',
      highlight: 'Our specially formulated bio-nutrients improve biological activity, speed up waste breakdown, and stabilize treatment plant performance.',
      benefits: [
        'Enhances microbial efficiency.',
        'Improves COD and BOD reduction.',
        'Stabilizes treatment performance under fluctuating loads.'
      ],
      icon: 'shield'
    }
  };


  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            this.isVisible[id] = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        this.observer.observe(el);
      });
    }, 100);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  getActiveTabContent(): TabContent {
    return this.tabContent[this.activeTab];
  }

  getActiveProducts(): Product[] {
    return this.products[this.activeTab];
  }

  getActiveProductImages(): ProductImage[] {
    return this.productImages[this.activeTab] || this.productImages['stp'];
  }

  getProductLabel(): string {
    return this.activeTab === 'etp' ? 'Bio Dispersant' : 'Antiscalant';
  }

  getAnimationStyle(elementId: string, delay: number = 0): any {
    return {
      opacity: this.isVisible[elementId] ? 1 : 0,
      transform: this.isVisible[elementId] ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.8s ease-out ${delay}s`
    };
  }

  // Image popup methods
  openImagePopup(image: ProductImage): void {
    this.selectedImage = image;
    this.isImagePopupOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeImagePopup(): void {
    this.isImagePopupOpen = false;
    this.selectedImage = null;
    document.body.style.overflow = ''; // Restore scrolling
  }
}