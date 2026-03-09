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


interface chmProduct {
  label: string;
  size: string;
  containerSize: string;
  imageUrl: string;
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
  showBio: boolean = true;
  private observer!: IntersectionObserver;

  // Fullscreen image popup properties
  isImagePopupOpen: boolean = false;
  selectedImage: ProductImage | null = null;

  showDescription = false;

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  showChem: boolean = false;
  mainActiveTab: number = 1;

  activeProduct: chmProduct | null = null;
  activeIndex: number = -1;

  chemical: chmProduct[] = [
    {
      label: 'ZYMETREAT MG 01',
      size: '5 KG Container',
      containerSize: '5 KGs',
      imageUrl: 'assets/products/biocul/chemical/ZYMETREAT MG 01.jpg'
    },
    {
      label: 'ZYMETREAT MG 02',
      size: '5 KG Container',
      containerSize: '5 KGs',
      imageUrl: 'assets/products/biocul/chemical/ZYMETREAT MG 02.jpg'
    },
    {
      label: 'ZYMETREAT MG 03',
      size: '5 KG Container',
      containerSize: '5 KGs',
      imageUrl: 'assets/products/biocul/chemical/ZYMETREAT MG 03.jpg'
    },
    {
      label: 'ZYMETREAT MG 04',
      size: '5 KG Container',
      containerSize: '5 KGs',
      imageUrl: 'assets/products/biocul/chemical/ZYMETREAT MG 04.jpg'
    },
    {
      label: 'ZYMETREAT MG 05',
      size: '5 KG Container',
      containerSize: '5 KGs',
      imageUrl: 'assets/products/biocul/chemical/ZYMETREAT MG 05.jpg'
    },
    {
      label: 'ZYMETREAT MG 06',
      size: '5 KG Container',
      containerSize: '5 KGs',
      imageUrl: 'assets/products/biocul/chemical/ZYMETREAT MG 06.jpg'
    },
    {
      label: 'ZYMETREAT MG 07',
      size: '5 KG Container',
      containerSize: '5 KGs',
      imageUrl: 'assets/products/biocul/chemical/ZYMETREAT MG 07.jpg'
    },
    {
      label: 'ZYMETREAT MG 08',
      size: '5 KG Container',
      containerSize: '5 KGs',
      imageUrl: 'assets/products/biocul/chemical/ZYMETREAT MG 08.jpg'
    },
    {
      label: 'ZYMETREAT MG 09',
      size: '5 KG Container',
      containerSize: '5 KGs',
      imageUrl: 'assets/products/biocul/chemical/ZYMETREAT MG 09.jpg'
    }
  ];


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
      // {
      //   label: 'Seat Polish',
      //   size: '5L Container',
      //   containerSize: '5L',
      //   cardClass: 'blue-card',
      //   boxClass: 'blue-box',
      //   imageUrl: 'assets/products/biocul/stp/Seat-Polish_5L-150x150.jpg.jpeg'
      // },
      // {
      //   label: 'Water Less Car Wash',
      //   size: '500 mL Bottle',
      //   containerSize: '500mL',
      //   cardClass: 'gray-card',
      //   boxClass: 'gray-box',
      //   imageUrl: 'assets/products/biocul/stp/Water-Less-Car-Wash_500mL.jpeg'
      // },
      // {
      //   label: 'Car Wash Shampoo',
      //   size: '5L Container',
      //   containerSize: '5L',
      //   cardClass: 'blue-card',
      //   boxClass: 'blue-box',
      //   imageUrl: 'assets/products/biocul/stp/Car-Wash-Shampoo_5L-150x150.jpeg'
      // },
      // {
      //   label: 'Automobile Freshener',
      //   size: '250 mL Bottle',
      //   containerSize: '250mL',
      //   cardClass: 'blue-card',
      //   boxClass: 'blue-box',
      //   imageUrl: 'assets/products/biocul/stp/Automobile-Freshener_250mL-600x600.jpeg'
      // },
      // {
      //   label: 'Car Tyre Polish',
      //   size: '5L Container',
      //   containerSize: '5L',
      //   cardClass: 'gray-card',
      //   boxClass: 'gray-box',
      //   imageUrl: 'assets/products/biocul/stp/Car-Tyre-Polish_5L-150x150.jpeg'
      // },
      // {
      //   label: 'Dashboard Polish',
      //   size: '5L Container',
      //   containerSize: '5L',
      //   cardClass: 'green-card',
      //   boxClass: 'green-box',
      //   imageUrl: 'assets/products/biocul/stp/Dashboard-Polish_5L.jpg.jpeg'
      // },
      // {
      //   label: 'Car Wash Shampoo',
      //   size: '500 mL Bottle',
      //   containerSize: '500mL',
      //   cardClass: 'blue-card',
      //   boxClass: 'blue-box',
      //   imageUrl: 'assets/products/biocul/stp/Car-Wash-Shampoo_500mL.jpeg'
      // },
      // {
      //   label: 'Tyre Polish',
      //   size: '500 mL Bottle',
      //   containerSize: '500mL',
      //   cardClass: 'gray-card',
      //   boxClass: 'gray-box',
      //   imageUrl: 'assets/products/biocul/stp/Tyre-Polish_500mL.jpg.jpeg'
      // },
      // {
      //   label: 'Water Less Car Wash',
      //   size: '500 mL Bottle',
      //   containerSize: '500mL',
      //   cardClass: 'blue-card',
      //   boxClass: 'blue-box',
      //   imageUrl: 'assets/products/biocul/stp/Water-Less-Car-Wash_500mL.jpeg'
      // },
      // {
      //   label: 'Automobile Polish',
      //   size: '5L Container',
      //   containerSize: '5L',
      //   cardClass: 'blue-card',
      //   boxClass: 'blue-box',
      //   imageUrl: 'assets/products/biocul/stp/Automobile-Polish_5L.jpg.jpeg'
      // },
      // {
      //   label: 'Seat Polish',
      //   size: '5L Container',
      //   containerSize: '5L',
      //   cardClass: 'gray-card',
      //   boxClass: 'gray-box',
      //   imageUrl: 'assets/products/biocul/stp/Seat-Polish_5L-150x150.jpg.jpeg'
      // },
      // {
      //   label: 'Automobile Freshener',
      //   size: '250 mL Bottle',
      //   containerSize: '250mL',
      //   cardClass: 'green-card',
      //   boxClass: 'green-box',
      //   imageUrl: 'assets/products/biocul/stp/Automobile-Freshener_250mL-600x600.jpeg'
      // }
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
      highlight: 'We provide customized STP treatment chemicals and bio-cultures that enhance treatment efficiency, reduce sludge volume, and ensure clear, odor-free discharge water suitable for reuse.',
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
    this.setMainActiveTab(1);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setMainActiveTab(tab: number): void {
    this.mainActiveTab = tab;
    if (tab === 1) {
      this.showBio = false;
      this.showChem = true;
    } else {
      this.showBio = true;
      this.showChem = false;
    }
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

  openLightbox(product: chmProduct, index: number): void {
    this.activeProduct = product;
    this.activeIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.activeProduct = null;
    this.activeIndex = -1;
    document.body.style.overflow = '';
  }

  prev(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.activeProduct = this.chemical[this.activeIndex];
    }
  }

  next(): void {
    if (this.activeIndex < this.chemical.length - 1) {
      this.activeIndex++;
      this.activeProduct = this.chemical[this.activeIndex];
    }
  }

  goTo(index: number): void {
    this.activeIndex = index;
    this.activeProduct = this.chemical[index];
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox-backdrop')) {
      this.closeLightbox();
    }
  }
}