import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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

export interface ChemicalProduct {
  image: string;
  size: string;
  label: string;
  containerSize: string;
  description: string;
  cardClass: string;
  boxClass: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-speciality-chemicals',
  imports: [CommonModule],
  templateUrl: './speciality-chemicals.html',
  styleUrl: './speciality-chemicals.css',
})
export class SpecialityChemicals {
  activeTab: string = 'hvac';
  isImagePopupOpen: boolean = false;
  selectedImage: ChemicalProduct | null = null;
  isVisible: { [key: string]: boolean } = {};
  private observer!: IntersectionObserver;
  chemicalProductsByTab: { [key: string]: ChemicalProduct[] } = {
    hvac: [
      {
        image: 'assets/products/splChem/HVAC-Antiscalant50-300x300.jpg.jpeg',
        label: 'Antiscalant',
        description: '50 Kg Container',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        size: '50',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-Antiscalant-222x300.jpg.jpeg',
        label: 'Antiscalant',
        description: '222x300 Container',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        size: '222',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-Biocide50-300x300.jpg.jpeg',
        label: 'Biocide',
        description: '50 Kg Container',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        size: '50',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-Biocide-222x300.jpg.jpeg',
        label: 'Biocide',
        description: '222x300 Container',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        size: '222',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-Biodispersant50-300x300.jpg.jpeg',
        label: 'Biodispersant',
        description: '50 Kg Container',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        size: '50',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-Biodespersant-222x300.jpg.jpeg',
        label: 'Biodispersant',
        description: '222x300 Container',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        size: '222',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-Corrosion-Inhibitor50-300x300.jpg.jpeg',
        label: 'Corrosion Inhibitor',
        description: '50 Kg Container',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        size: '50',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-Corrosion-inhibitor-224x300.jpg.jpeg',
        label: 'Corrosion Inhibitor',
        description: '224x300 Container',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        size: '224',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-Desaclant50-300x300.jpg.jpeg',
        label: 'Descalant',
        description: '50 Kg Container',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        size: '50',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-Descalant-222x300.jpg.jpeg',
        label: 'Descalant',
        description: '222x300 Container',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        size: '222',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-pH-modifier50-300x300.jpg.jpeg',
        label: 'pH Modifier',
        description: '50 Kg Container',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        size: '50',
        containerSize: ''
      },
      {
        image: 'assets/products/splChem/HVAC-pH-modifier-222x300.jpg.jpeg',
        label: 'pH Modifier',
        description: '222x300 Container',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        size: '222',
        containerSize: ''
      }
    ],

    ro: [],       // add RO images later
    boiler: []    // add Boiler images later
  };


  chemicalProducts: ChemicalProduct[] = [
    {
      image: 'assets/products/splChem/HVAC-Antiscalant50-300x300.jpg.jpeg',
      size: '50',
      label: 'Antiscalant',
      description: '50 Kg Container',
      cardClass: 'blue-card',
      boxClass: 'blue-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-Antiscalant-222x300.jpg.jpeg',
      size: '222',
      label: 'Antiscalant',
      description: '222x300 Container',
      cardClass: 'gray-card',
      boxClass: 'gray-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-Biocide-222x300.jpg.jpeg',
      size: '222',
      label: 'Biocide',
      description: '222x300 Container',
      cardClass: 'blue-card',
      boxClass: 'blue-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-Biocide50-300x300.jpg.jpeg',
      size: '50',
      label: 'Biocide',
      description: '50 Kg Container',
      cardClass: 'gray-card',
      boxClass: 'gray-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-Biodespersant-222x300.jpg.jpeg',
      size: '222',
      label: 'Biodespersant',
      description: '222x300 Container',
      cardClass: 'blue-card',
      boxClass: 'blue-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-Biodispersant50-300x300.jpg.jpeg',
      size: '50',
      label: 'Biodispersant',
      description: '50 Kg Container',
      cardClass: 'gray-card',
      boxClass: 'gray-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-Corrosion-inhibitor-224x300.jpg.jpeg',
      size: '224',
      label: 'Corrosion Inhibitor',
      description: '224x300 Container',
      cardClass: 'blue-card',
      boxClass: 'blue-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-Corrosion-Inhibitor50-300x300.jpg.jpeg',
      size: '50',
      label: 'Corrosion Inhibitor',
      description: '50 Kg Container',
      cardClass: 'gray-card',
      boxClass: 'gray-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-Desaclant50-300x300.jpg.jpeg',
      size: '50',
      label: 'Descalant',
      description: '50 Kg Container',
      cardClass: 'blue-card',
      boxClass: 'blue-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-Descalant-222x300.jpg.jpeg',
      size: '222',
      label: 'Descalant',
      description: '222x300 Container',
      cardClass: 'gray-card',
      boxClass: 'gray-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-pH-modifier-222x300.jpg.jpeg',
      size: '222',
      label: 'pH Modifier',
      description: '222x300 Container',
      cardClass: 'blue-card',
      boxClass: 'blue-box',
      containerSize: ''
    },
    {
      image: 'assets/products/splChem/HVAC-pH-modifier50-300x300.jpg.jpeg',
      size: '50',
      label: 'pH Modifier',
      description: '50 Kg Container',
      cardClass: 'gray-card',
      boxClass: 'gray-box',
      containerSize: ''
    }
  ];

  selectedChemicalProduct: ChemicalProduct | null = null;
  showModal: boolean = false;

  products: { [key: string]: Product[] } = {
    hvac: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    ro: [
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
    ]
  };

  tabContent: { [key: string]: TabContent } = {
    hvac: {
      title: 'HVAC/Cooling Tower',
      subtitle: 'Ensure Peak Performance: Cooling Water Treatment Solutions',
      description: 'Protect your critical equipment and optimize cooling system efficiency with our comprehensive line of cooling water treatment chemicals. Untreated cooling water leads to costly problems like corrosion, scaling, and biological growth. These issues reduce heat transfer, increase downtime, and shorten equipment life. Let us help you achieve reliable cooling, reduced maintenance costs, and extended equipment life.',
      highlight: 'Our tailored chemical programs prevent these concerns, maximizing system performance and energy savings.',
      icon: 'zap'
    },
    ro: {
      title: 'Reverse Osmosis',
      subtitle: 'Unlock the Power of Pure Water: Reverse Osmosis(RO) Chemicals',
      description: 'Achieve exceptional water quality and optimize your reverse osmosis (RO) system performance with our comprehensive line of RO chemicals. Traditional water contains impurities like dissolved salts, minerals, and organic matter. RO membranes act as a barrier, allowing only purified water to pass through, leaving contaminants behind.',
      highlight: 'By using our RO chemicals, you can ensure consistent production of high-purity water, extend membrane life, and minimize downtime for maintenance. Let us help your achieve superior water quality and maximize the return on your RO system investment.',
      note: 'However, over time, these contaminants can accumulate on the membrane surface, reducing efficiency and requiring costly replacements.',
      icon: 'droplets'
    },
    boiler: {
      title: 'Boiler Chemicals',
      subtitle: 'Safeguard Your Steam: Effective Boiler Water Treatment Solutions',
      description: 'Ensure the safe and efficient operation of your boiler system with our proven boiler water treatment chemicals. Hard water and impurities can wreak havoc on boilers, causing corrosion, scale buildup, and foaming. These issues compromise boiler efficiency, increase maintenance costs, and pose safety risks.',
      highlight: 'Our comprehensive boiler water treatment program utilizes targeted chemicals to prevent corrosion, control scale, and minimize foaming. Experience the benefits of clean and reliable boiler operation. Our treatment programs are customized to your specific boiler type and operating conditions. Let us help you optimize boiler performance, ensure steam quality, and achieve peace of mind.',
      benefits: [
        'Prevent corrosion: Protect your boiler tubes and extend equipment life.',
        'Control scale: Eliminate mineral deposits that impede heat transfer and reduce energy consumption.',
        'Minimize foaming: Maintain proper water levels and prevent carryover of boiler water into the steam system.'
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

  getProductLabel(): string {
    return this.activeTab === 'ro' ? 'Bio Dispersant' : 'Antiscalant';
  }

  getAnimationStyle(elementId: string, delay: number = 0): any {
    return {
      opacity: this.isVisible[elementId] ? 1 : 0,
      transform: this.isVisible[elementId] ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.8s ease-out ${delay}s`
    };
  }

  openImageModal(chemicalProduct: ChemicalProduct): void {
    this.selectedChemicalProduct = chemicalProduct;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeImageModal(): void {
    this.showModal = false;
    this.selectedChemicalProduct = null;
    document.body.style.overflow = 'auto';
  }

  onModalBackgroundClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      this.closeImageModal();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.showModal) {
      this.closeImageModal();
    }
  }


  // Image popup methods
  openImagePopup(image: ChemicalProduct): void {
    this.selectedImage = image;
    this.isImagePopupOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeImagePopup(): void {
    this.isImagePopupOpen = false;
    this.selectedImage = null;
    document.body.style.overflow = ''; // Restore scrolling
  }

  getActiveProductImages(): ChemicalProduct[] {
    return this.chemicalProductsByTab[this.activeTab] || this.chemicalProductsByTab['stp'];
  }
}
