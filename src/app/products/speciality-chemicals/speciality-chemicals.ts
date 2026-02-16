import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
interface Product {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  products: Product[];
  benefits?: string[];
}

interface Treatment {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface ChemicalProduct {
  productTitle: string;
  imageUrl: string;
}

@Component({
  selector: 'app-speciality-chemicals',
  imports: [CommonModule],
  templateUrl: './speciality-chemicals.html',
  styleUrl: './speciality-chemicals.css',
})
export class SpecialityChemicals {

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

  chemicalInventory: ChemicalProduct[] = [];
  selectedItemIndex: number = 0;
  isLightboxVisible: boolean = false;

  selectedCategory: Category | null = null;
  selectedProduct: Product | null = null;
  treatments: Treatment[] = [
    {
      icon: 'bi-droplet-fill',
      title: 'RO WATER & MEMBRANE TREATMENT',
      description: 'Achieve exceptional water quality and optimize your reverse osmosis (RO) system performance with our comprehensive line of RO chemicals. Traditional water contains impurities like dissolved salts, minerals and organic matter. RO membranes act as a barrier, allowing only purified water to pass through,leaving contaminants behind. By using our RO chemicals, you can ensure consistent production of high-purity water, extend membrane life and minimize downtime for maintenance. You can achieve superior water quality and maximize the return on your RO system investment. However, over time, these contaminants can accumulate on the membrane surface, reducing efficiency and requiring costly replacements.',
      color: 'primary'
    },
    {
      icon: 'bi-thermometer-half',
      title: 'BOILER WATER TREATMENT',
      description: 'Ensure the safe and efficient operation of your boiler system with our proven boiler water treatment chemicals. Hard water and impurities can wreak havoc on boilers, causing corrosion, scale buildup, and foaming. These issues compromise boiler efficiency, increase maintenance costs, and pose safety risks.',
      color: 'danger'
    },
    {
      icon: 'bi-wind',
      title: 'COOLING TOWER WATER TREATMENT',
      description: 'Protect your critical equipment and optimize cooling system efficiency with our comprehensive line of cooling water treatment chemicals. Untreated cooling water leads to costly problems like corrosion, scaling, and biological growth. These issues reduce heat transfer, increase downtime, and shorten equipment life. Let us help you achieve reliable cooling, reduced maintenance costs and extended equipment life. Our tailored chemical programs prevent these concerns, maximizing system performance and energy savings.',
      color: 'info'
    }
  ];

  mainProducts: Product[] = [
    {
      id: 'pm',
      name: 'PM',
      fullName: 'pH Modifier',
      description: 'Maintain the ideal pH range for system stability and chemical effectiveness.',
      icon: 'bi-speedometer2',
      color: '#2d5016',
      image: 'assets/images/products/ph-modifier.jpg'
    },
    {
      id: 'as',
      name: 'AS',
      fullName: 'Antiscalant',
      description: 'Prevents mineral scale formation in reverse osmosis, cooling tower & boiler systems.',
      icon: 'bi-shield-check',
      color: '#3d6b1f',
      image: 'assets/images/products/antiscalant.jpg'
    },
    {
      id: 'ds',
      name: 'DS',
      fullName: 'Descalant',
      description: 'High-strength descaling chemical to dissolve tough mineral deposits.',
      icon: 'bi-droplet-half',
      color: '#4d8629',
      image: 'assets/images/products/descalant.jpg'
    },
    {
      id: 'mb',
      name: 'MB',
      fullName: 'Microbiocide',
      description: 'Fast-acting biocide to control bacteria, algae and fungal growth.',
      icon: 'bi-virus',
      color: '#5ea332',
      image: 'assets/images/products/microbiocide.jpg'
    },
    {
      id: 'ci',
      name: 'CI',
      fullName: 'Corrosion Inhibitor',
      description: 'Protects metal surfaces and prevents rust, pitting and degradation.',
      icon: 'bi-shield-fill-check',
      color: '#70bf3c',
      image: 'assets/images/products/corrosion-inhibitor.jpg'
    },
    {
      id: 'os',
      name: 'OS',
      fullName: 'Oxygen Scavenger',
      description: 'Removes dissolved oxygen from boiler feedwater and condensate systems.',
      icon: 'bi-wind',
      color: '#82d946',
      image: 'assets/images/products/oxygen-scavenger.jpg'
    },
    {
      id: 'nsho',
      name: 'NSHO',
      fullName: 'Nano Silver Hydrogen',
      description: 'Next-generation multi-component disinfectant with nano-silver ions.',
      icon: 'bi-stars',
      color: '#94f050',
      image: 'assets/images/products/nano-silver-hydrogen.jpg'
    },
    {
      id: 'rawmaterial',
      name: 'RAWMATERIAL',
      fullName: 'Raw Material',
      description: 'We are a reliable raw material supplier for cleaning chemicals and speciality chemicals, serving manufacturers and formulators.Our product range includes acids, bases, fragrances, and functional additives.We ensure consistent quality, technical- grade materials, and batch reliability for every supply.Ideal for household cleaners, industrial cleaners, water treatment, and speciality formulations.Timely delivery, competitive pricing, and technical support make us a trusted sourcing partners',
      icon: 'bi-box-seam',
      color: '#7bf028',
      image: 'assets/images/products/raw-material.jpg'
    }
  ];

  categories: Category[] = [
    {
      id: 'ro',
      title: 'RO Water & Membrane Treatment',
      subtitle: 'Unlock the Power of Pure Water!',
      description: 'Achieve exceptional water quality and optimize your reverse osmosis (RO) system performance.',
      products: [
        {
          id: 'pm-r01',
          name: 'Zymetreat PM',
          fullName: 'pH Modifier',
          description: 'Maintains ideal pH range for system stability and chemical effectiveness. Available as pH Booster for acidic water and pH Reducer for alkaline water.',
          icon: 'bi-speedometer2',
          color: '#2d5016',
          image: 'assets/products/splChem/Reverse Osmosis ZYMETREAT PM R01 pH Modifier.jpg'
        },

        {
          id: 'as-r01',
          name: 'Zymetreat AS',
          fullName: 'Antiscalant',
          description: 'Prevents mineral scale formation in RO systems, cooling towers and boilers. Controls hard-to-treat salts, improves reliability and extends equipment life.',
          icon: 'bi-shield-check',
          color: '#3d6b1f',
          image: 'assets/products/splChem/Reverse Osmosis ZYMETREAT AS R01 Antiscalant.jpg'
        },

        {
          id: 'ds-r01',
          name: 'Zymetreat DS',
          fullName: 'Descalant',
          description: 'High-strength descaling chemical that removes calcium, magnesium, rust and iron oxide deposits. Restores efficiency without damaging metal surfaces.',
          icon: 'bi-droplet-half',
          color: '#4d8629',
          image: 'assets/products/splChem/Reverse Osmosis ZYMETREAT DS R01 Descalant.jpg'
        },

        {
          id: 'mb-r01',
          name: 'Zymetreat MB',
          fullName: 'Microbiocide',
          description: 'Fast-acting biocide controlling bacteria, algae and fungi in cooling towers, RO pre-treatment and industrial water circuits.',
          icon: 'bi-virus',
          color: '#5ea332',
          image: 'assets/products/splChem/Reverse Osmosis ZYMETREAT MB R01 MicroBiocide.jpg'
        },

        {
          id: 'ci-r01',
          name: 'Zymetreat CI',
          fullName: 'Corrosion Inhibitor',
          description: 'Forms a protective film on metal surfaces to prevent rust, pitting and corrosion in boilers, pipelines and cooling systems.',
          icon: 'bi-shield-fill-check',
          color: '#82d946',
          image: 'assets/products/splChem/Reverse Osmosis ZYMETREAT CI R01 Scale & Corrosion Inhibitor.jpg'
        },

        {
          id: 'os-r01',
          name: 'Zymetreat OS',
          fullName: 'Oxygen Scavenger',
          description: 'Removes dissolved oxygen from boiler feedwater and condensate systems, preventing pitting corrosion and extending boiler life.',
          icon: 'bi-wind',
          color: '#3a6f3a',
          image: 'assets/products/splChem/Reverse Osmosis ZYMETREAT OS R01 Oxygen Scavanger.jpg'
        },

        {
          id: 'nsho-r01',
          name: 'Zymetreat NSHO',
          fullName: 'Nano Silver Hydrogen Peroxide',
          description: 'Advanced disinfectant combining hydrogen peroxide and nano-silver ions for long-lasting microbial control without harmful residues.',
          icon: 'bi-droplet',
          color: '#70bf3c',
          image: 'assets/products/splChem/Reverse Osmosis ZYMETREAT NSHO R01 Nano Silver Hydrogen Peroxide.jpg'
        }
      ],
      benefits: [
        'Consistent high-purity water production',
        'Extended membrane life',
        'Minimized downtime',
        'Maximum ROI on RO systems'
      ]
    },
    {
      id: 'boiler',
      title: 'Boiler Water Treatment',
      subtitle: 'Safeguard Your Steam',
      description: 'Ensure the safe and efficient operation of your boiler system with proven treatment chemicals.',
      products: [
        {
          id: 'pm-b01',
          name: 'Zymetreat PM-B01',
          fullName: 'pH Modifier',
          description: 'Maintains optimal pH levels in boiler feedwater to improve chemical performance and prevent corrosion and scaling.',
          icon: 'bi-speedometer2',
          color: '#5b3a29',
          image: 'assets/products/splChem/Boiler  ZYMETREAT PM B01 pH Modifier.jpg'
        },

        {
          id: 'as-b01',
          name: 'Zymetreat AS-B01',
          fullName: 'Antiscalant',
          description: 'Prevents scale formation caused by calcium, magnesium and silica in boilers, heat exchangers and steam systems.',
          icon: 'bi-shield-check',
          color: '#6d4b32',
          image: 'assets/products/splChem/Boiler ZYMETREAT AS B01 Antiscalant.jpg'
        },

        {
          id: 'ds-b01',
          name: 'Zymetreat DS-B01',
          fullName: 'Descalant',
          description: 'High-performance descaling chemical for removing hard scale, rust and iron oxide deposits from boilers and pipelines.',
          icon: 'bi-droplet-half',
          color: '#7f5c3b',
          image: 'assets/products/splChem/Boiler ZYMETREAT DS B01 Descalant.jpg'
        },

        {
          id: 'mb-b01',
          name: 'Zymetreat MB-B01',
          fullName: 'Microbiocide',
          description: 'Controls bacteria, algae and fungal growth in boiler feedwater systems, condensate lines and cooling circuits.',
          icon: 'bi-virus',
          color: '#8f6d45',
          image: 'assets/products/splChem/Boiler ZYMETREAT MB B01 Oxidizing Biocide.jpg'
        },

        {
          id: 'mb-b02',
          name: 'Zymetreat MB-B02',
          fullName: 'Bio-Dispersant',
          description: 'Disperses sludge, biofilm and organic deposits, improving system cleanliness and enhancing biocide efficiency.',
          icon: 'bi-diagram-3',
          color: '#a07e4f',
          image: 'assets/products/splChem/Boiler ZYMETREAT MB B02 Bio Dispersant.jpg'
        },

        {
          id: 'ci-b01',
          name: 'Zymetreat CI-B01',
          fullName: 'Corrosion Inhibitor',
          description: 'Forms a protective film on metal surfaces to prevent corrosion, pitting and metal loss in boilers and steam systems.',
          icon: 'bi-shield-fill-check',
          color: '#b08f59',
          image: 'assets/products/splChem/Boiler ZYMETREAT CI B01 Scale & Corrosion Inhibitor.jpg'
        },

        {
          id: 'sp-b01',
          name: 'Zymetreat SP-B01',
          fullName: 'Cleaner – Acidic',
          description: 'Acid-based cleaner designed to remove inorganic scale and mineral deposits from boiler and heat exchanger surfaces.',
          icon: 'bi-bucket',
          color: '#5b3a29',
          image: 'assets/products/splChem/Boiler ZYMETREAT SP B01 Cleaner Acidic.jpg'
        },

        {
          id: 'sp-b02',
          name: 'Zymetreat SP-B02',
          fullName: 'Cleaner – Alkalic',
          description: 'Alkaline cleaner effective in removing oil, grease, organic fouling and sludge from boiler systems.',
          icon: 'bi-bucket-fill',
          color: '#6d4b32',
          image: 'assets/products/splChem/Boiler ZYMETREAT SP B02 Cleaner Alkalic.jpg'
        },

        {
          id: 'sp-b03',
          name: 'Zymetreat SP-B03',
          fullName: 'Organic Cleaner',
          description: 'Specialized cleaner formulated to eliminate stubborn organic deposits and biofouling in boiler and process equipment.',
          icon: 'bi-droplet',
          color: '#7f5c3b',
          image: 'assets/products/splChem/Boiler ZYMETREAT SP B03 Organic Cleaner.jpg'
        }
      ],
      benefits: [
        'Prevents corrosion and extends equipment life',
        'Eliminates scale and improves heat transfer',
        'Minimizes foaming and ensures steam quality',
        'Customized treatment programs'
      ]
    },
    {
      id: 'cooling',
      title: 'Cooling Tower Water Treatment',
      subtitle: 'Ensure Peak Performance',
      description: 'Protect critical equipment and optimize cooling system efficiency with comprehensive treatment.',
      products: [
        {
          id: 'pm-c01',
          name: 'Zymetreat PM-C01',
          fullName: 'pH Modifier',
          description: 'Maintains optimal pH balance in cooling tower water to ensure effective chemical treatment and system stability.',
          icon: 'bi-speedometer2',
          color: '#1f4f5a',
          image: 'assets/products/splChem/Cooling Tower ZYMETREAT PMA C01 pH Modifier.jpg'
        },

        {
          id: 'as-c01',
          name: 'Zymetreat AS-C01',
          fullName: 'Antiscalant',
          description: 'Prevents scale formation caused by calcium, magnesium and silica in cooling towers and recirculating water systems.',
          icon: 'bi-shield-check',
          color: '#2b6a78',
          image: 'assets/products/splChem/Cooling Tower ZYMETREAT AS C01 Antiscalant.jpg'
        },

        {
          id: 'ds-c01',
          name: 'Zymetreat DS-C01',
          fullName: 'Descalant',
          description: 'High-strength descaling chemical formulated to remove mineral scale, rust and deposits from cooling tower systems.',
          icon: 'bi-droplet-half',
          color: '#378595',
          image: 'assets/products/splChem/Cooling Tower ZYMETREAT DS C01 Descalant.jpg'
        },

        {
          id: 'mb-c01',
          name: 'Zymetreat MB-C01',
          fullName: 'Microbiocide',
          description: 'Fast-acting biocide for controlling bacteria, algae and fungi in cooling towers and open recirculating systems.',
          icon: 'bi-virus',
          color: '#43a0b2',
          image: 'assets/products/splChem/Cooling Tower ZYMETREAT MB C01 MicroBiocide.jpg'
        },

        {
          id: 'mb-c02',
          name: 'Zymetreat MB-C02',
          fullName: 'Bio-Dispersant',
          description: 'Disperses biofilm, sludge and organic matter, improving heat transfer efficiency and biocide performance.',
          icon: 'bi-diagram-3',
          color: '#4fbac9',
          image: 'assets/products/splChem/Cooling Tower ZYMETREAT MB C02 Bio Dispersant.jpg'
        },

        {
          id: 'ci-c01',
          name: 'Zymetreat CI-C01',
          fullName: 'Corrosion Inhibitor',
          description: 'Forms a protective layer on metal surfaces to prevent corrosion, pitting and metal loss in cooling water systems.',
          icon: 'bi-shield-fill-check',
          color: '#5bd4e0',
          image: 'assets/products/splChem/Cooling Tower ZYMETREAT CI C01 Corrosion Inhibitor.jpg'
        }
      ],
      benefits: [
        'Prevents corrosion, scaling, and biological growth',
        'Maximizes heat transfer efficiency',
        'Reduces maintenance costs',
        'Extends equipment lifespan'
      ]
    }
  ];

  ngOnInit() {
    this.initializeProductCatalog();
  }

  openCategoryModal(category: Category): void {
    this.selectedCategory = category;
  }

  openProductModal(product: Product): void {
    this.selectedProduct = product;
  }

  closeCategoryModal(): void {
    this.selectedCategory = null;
  }

  closeProductModal(): void {
    this.selectedProduct = null;
  }

  onImageError(event: any): void {
    // Fallback to placeholder if image fails to load
    event.target.style.display = 'none';
    const placeholder = event.target.parentElement;
    placeholder.innerHTML = `
      <div class="product-image-placeholder" style="background-color: ${this.selectedProduct?.color}20">
        <i class="bi ${this.selectedProduct?.icon}" style="color: ${this.selectedProduct?.color}; font-size: 80px;"></i>
      </div>
    `;
  }

  private initializeProductCatalog(): void {
    this.chemicalInventory = [
      {
        productTitle: 'HVAC Antiscalant',
        imageUrl: 'assets/products/splChem/HVAC-Antiscalant-222x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC Antiscalant 50',
        imageUrl: 'assets/products/splChem/HVAC-Antiscalant50-300x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC Biocide',
        imageUrl: 'assets/products/splChem/HVAC-Biocide-222x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC Biocide 50',
        imageUrl: 'assets/products/splChem/HVAC-Biocide50-300x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC Biodespersant',
        imageUrl: 'assets/products/splChem/HVAC-Biodespersant-222x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC Biodispersant 50',
        imageUrl: 'assets/products/splChem/HVAC-Biodispersant50-300x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC Corrosion Inhibitor',
        imageUrl: 'assets/products/splChem/HVAC-Corrosion-inhibitor-224x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC Corrosion Inhibitor 50',
        imageUrl: 'assets/products/splChem/HVAC-Corrosion-Inhibitor50-300x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC Desaclant 50',
        imageUrl: 'assets/products/splChem/HVAC-Desaclant50-300x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC Descalant',
        imageUrl: 'assets/products/splChem/HVAC-Descalant-222x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC pH Modifier',
        imageUrl: 'assets/products/splChem/HVAC-pH-modifier-222x300.jpg.jpeg'
      },
      {
        productTitle: 'HVAC pH Modifier 50',
        imageUrl: 'assets/products/splChem/HVAC-pH-modifier50-300x300.jpg.jpeg'
      }
    ];
  }

  openLightboxViewer(itemIndex: number): void {
    this.selectedItemIndex = itemIndex;
    this.isLightboxVisible = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightboxViewer(): void {
    this.isLightboxVisible = false;
    document.body.style.overflow = 'auto';
  }

  navigateToAdjacentItem(direction: number): void {
    this.selectedItemIndex += direction;

    if (this.selectedItemIndex < 0) {
      this.selectedItemIndex = this.chemicalInventory.length - 1;
    } else if (this.selectedItemIndex >= this.chemicalInventory.length) {
      this.selectedItemIndex = 0;
    }
  }

  getCurrentDisplayedProduct(): ChemicalProduct {
    return this.chemicalInventory[this.selectedItemIndex];
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardNavigation(event: KeyboardEvent): void {
    if (!this.isLightboxVisible) return;

    switch (event.key) {
      case 'Escape':
        this.closeLightboxViewer();
        break;
      case 'ArrowLeft':
        this.navigateToAdjacentItem(-1);
        break;
      case 'ArrowRight':
        this.navigateToAdjacentItem(1);
        break;
    }
  }

  preventEventBubbling(event: Event): void {
    event.stopPropagation();
  }
}
