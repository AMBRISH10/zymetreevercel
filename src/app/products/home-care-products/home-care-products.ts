import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  imageUrl?: string;
}

@Component({
  selector: 'app-home-care-products',
  imports: [CommonModule],
  templateUrl: './home-care-products.html',
  styleUrl: './home-care-products.css',
})
export class HomeCareProducts {
  activeTab: string = 'kitchenCare';
  isVisible: { [key: string]: boolean } = {};
  private observer!: IntersectionObserver;

  // Fullscreen image popup properties
  isImagePopupOpen: boolean = false;
  selectedImage: ProductImage | null = null;

  showDescription = false;

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  products: { [key: string]: Product[] } = {
    kitchenCare: [
      { name: 'Dishwash Liquid', desc: 'Lemon - 1L' },
      { name: 'Dishwash Liquid', desc: 'Mint - 1L' },
      { name: 'Dishwash Powder', desc: '1 Kg' },
      { name: 'Brass Shine', desc: '100 mL' },
      { name: 'Silver Shine', desc: '100 mL' },
      { name: 'Kitchen Oil & Grease Remover', desc: 'KIT-PRO' }
    ],
    fabricCare: [
      { name: 'Detergent Liquid', desc: '5L Container' },
      { name: 'Detergent Powder', desc: '2 Kg Pack' },
      { name: 'Fabric Conditioner', desc: '500 mL' },
      { name: 'Cloth Bleach', desc: '1L Bottle' },
      { name: 'Cloth Whitener', desc: 'Premium' },
      { name: 'Washing Soda', desc: '500g' }
    ],
    toiletCare: [
      { name: 'Toilet Cleaner', desc: '1L Bottle' },
      { name: 'Toilet Cleaner', desc: '5L Container' },
      { name: 'Toilet Cleaning Acid', desc: '1L' },
      { name: 'Gel Acid', desc: '1L' },
      { name: 'Tiles Cleaner', desc: '1L' },
      { name: 'Tiles Cleaner', desc: '500 mL' }
    ],
    floorCare: [
      { name: 'Floor Cleaner', desc: 'Multi-Purpose - 5L' },
      { name: 'Floor Polish', desc: 'Shine & Protect' },
      { name: 'Marble Cleaner', desc: 'Premium - 1L' },
      { name: 'Tile Cleaner', desc: 'Heavy Duty - 5L' },
      { name: 'Wood Floor Care', desc: 'Gentle Formula' },
      { name: 'Floor Disinfectant', desc: 'Antibacterial - 5L' }
    ],
    autoCare: [
      { name: 'Car Wash Shampoo', desc: '500 mL' },
      { name: 'Car Wash Shampoo', desc: '5L Container' },
      { name: 'Dashboard Polish', desc: '5L' },
      { name: 'Car Tyre Polish', desc: '5L' },
      { name: 'Tyre Polish', desc: '500 mL' },
      { name: 'Automobile Freshener', desc: '250 mL' }
    ],
    disinfectants: [
      { name: 'Multi-Surface Disinfectant', desc: '1L Bottle' },
      { name: 'Floor Disinfectant', desc: '5L Container' },
      { name: 'Hand Sanitizer', desc: '500 mL' },
      { name: 'Bathroom Disinfectant', desc: '1L' },
      { name: 'Kitchen Disinfectant', desc: '1L' },
      { name: 'Disinfectant Spray', desc: '250 mL' }
    ]
  };

  // Product images for each tab
  productImages: { [key: string]: ProductImage[] } = {
    kitchenCare: [
      {
        label: 'Dishwash Liquid - Lemon',
        size: '1L Bottle',
        containerSize: '1L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/kitchenCare/DishwashLiquid_1L-Lemon.jpeg'
      },
      {
        label: 'Dishwash Liquid - Mint',
        size: '1L Bottle',
        containerSize: '1L',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/kitchenCare/DishwashlLiquid_1LMint.jpeg'
      },
      {
        label: 'Dishwash Powder',
        size: '1 Kg Pack',
        containerSize: '1Kg',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/kitchenCare/Dishwash-powder.jpeg'
      }
    ],
    fabricCare: [
      {
        label: 'Detergent Liquid',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/fabriCare/Detergentliquid_5L.jpeg'
      },
      {
        label: 'Detergent Powder',
        size: '2 Kg Pack',
        containerSize: '2Kg',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/fabriCare/Detergent-powder-2-Kg.jpg.jpeg'
      },
      {
        label: 'Fabric Conditioner',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'pink-card',
        boxClass: 'pink-box',
        imageUrl: 'assets/products/fabriCare/Fabric-conditioner-500mL-2.jpg.jpeg'
      }
    ],
    toiletCare: [
      {
        label: 'Toilet Cleaner',
        size: '1L Bottle',
        containerSize: '1L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/toiletCare/Toilet-cleaner_1L-169x300.jpeg'
      },
      {
        label: 'Toilet Cleaning Acid',
        size: '1L Bottle',
        containerSize: '1L',
        cardClass: 'red-card',
        boxClass: 'red-box',
        imageUrl: 'assets/products/toiletCare/Toilet-cleaning-acid_1L.png'
      },
      {
        label: 'Gel Acid',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/toiletCare/Gel-acid_5L-768x1024.jpeg'
      }
    ],
    floorCare: [
      {
        label: 'Floor Cleaner',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/floorCare/Floor-cleaner_5L.jpeg'
      },
      {
        label: 'Floor Polish',
        size: '1L Bottle',
        containerSize: '1L',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/floorCare/Floor-polish_1L.jpeg'
      },
      {
        label: 'Marble Cleaner',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'purple-card',
        boxClass: 'purple-box',
        imageUrl: 'assets/products/floorCare/Marble-cleaner_500mL.jpeg'
      }
    ],
    autoCare: [
      {
        label: 'Car Wash Shampoo',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/biocul/Car-Wash-Shampoo_500mL.jpeg'
      },
      {
        label: 'Dashboard Polish',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/biocul/Dashboard-Polish_5L.jpg.jpeg'
      },
      {
        label: 'Tyre Polish',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/biocul/Tyre-Polish_500mL.jpg.jpeg'
      }
    ],
    disinfectants: [
      {
        label: 'Multi-Surface Disinfectant',
        size: '1L Bottle',
        containerSize: '1L',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/disinfectants/Multi-surface-disinfectant_1L.jpeg'
      },
      {
        label: 'Floor Disinfectant',
        size: '5L Container',
        containerSize: '5L',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/disinfectants/Floor-disinfectant_5L.jpeg'
      },
      {
        label: 'Hand Sanitizer',
        size: '500 mL Bottle',
        containerSize: '500mL',
        cardClass: 'purple-card',
        boxClass: 'purple-box',
        imageUrl: 'assets/products/disinfectants/Hand-sanitizer_500mL.jpeg'
      }
    ]
  };

  tabContent: { [key: string]: TabContent } = {
    kitchenCare: {
      title: 'Kitchen Care',
      subtitle: 'Ensure Peak Performance: Cooling Water Treatment Solutions',
      description: 'Protect your critical equipment and optimize cooling system efficiency with our comprehensive line of cooling water treatment chemicals. Untreated cooling water leads to costly problems like corrosion, scaling, and biological growth. These issues reduce heat transfer, increase downtime, and shorten equipment life. Let us help you achieve reliable cooling, reduced maintenance costs, and extended equipment life.',
      highlight: 'Our tailored chemical programs prevent these concerns, maximizing system performance and energy savings.',
      icon: 'zap'
    },
    fabricCare: {
      title: 'Fabric Care',
      subtitle: 'Unlock the Power of Pure Water: Reverse Osmosis(RO) Chemicals',
      description: 'Achieve exceptional water quality and optimize your reverse osmosis (RO) system performance with our comprehensive line of RO chemicals. Traditional water contains impurities like dissolved salts, minerals, and organic matter. RO membranes act as a barrier, allowing only purified water to pass through, leaving contaminants behind.',
      highlight: 'By using our RO chemicals, you can ensure consistent production of high-purity water, extend membrane life, and minimize downtime for maintenance. Let us help your achieve superior water quality and maximize the return on your RO system investment.',
      note: 'However, over time, these contaminants can accumulate on the membrane surface, reducing efficiency and requiring costly replacements.',
      icon: 'droplets'
    },
    toiletCare: {
      title: 'Bathroom Tiles & Toilet Care',
      subtitle: 'Safeguard Your Steam: Effective Boiler Water Treatment Solutions',
      description: 'Ensure the safe and efficient operation of your boiler system with our proven boiler water treatment chemicals. Hard water and impurities can wreak havoc on boilers, causing corrosion, scale buildup, and foaming. These issues compromise boiler efficiency, increase maintenance costs, and pose safety risks.',
      highlight: 'Our comprehensive boiler water treatment program utilizes targeted chemicals to prevent corrosion, control scale, and minimize foaming. Experience the benefits of clean and reliable boiler operation. Our treatment programs are customized to your specific boiler type and operating conditions. Let us help you optimize boiler performance, ensure steam quality, and achieve peace of mind.',
      benefits: [
        'Prevent corrosion: Protect your boiler tubes and extend equipment life.',
        'Control scale: Eliminate mineral deposits that impede heat transfer and reduce energy consumption.',
        'Minimize foaming: Maintain proper water levels and prevent carryover of boiler water into the steam system.'
      ],
      icon: 'shield'
    },
    floorCare: {
      title: 'Floor Care',
      subtitle: 'Superior Floor Cleaning & Maintenance Solutions',
      description: 'Keep your floors spotless and protected with our range of specialized floor care products. Whether it\'s daily cleaning or deep maintenance, our products are formulated to clean, polish, and protect all types of flooring surfaces including marble, tiles, wood, and vinyl.',
      highlight: 'Our advanced formulations ensure streak-free shine, long-lasting protection, and easy maintenance for all floor types.',
      benefits: [
        'Versatile cleaning: Suitable for all floor types and surfaces.',
        'Protective coating: Extends floor life and maintains natural shine.',
        'Quick drying: No residue, safe for high-traffic areas.'
      ],
      icon: 'shield'
    },
    autoCare: {
      title: 'Auto Care',
      subtitle: 'Professional Car Care Products for Perfect Finish',
      description: 'Give your vehicle the care it deserves with our premium auto care products. From powerful car wash shampoos to protective polishes, our products are designed to clean, protect, and enhance your vehicle\'s appearance. Suitable for both professional detailers and car enthusiasts.',
      highlight: 'Our specialized formulations provide showroom-quality results while protecting your vehicle\'s surfaces from environmental damage.',
      benefits: [
        'Complete care: Clean, polish, and protect all vehicle surfaces.',
        'Long-lasting shine: UV protection and water-repellent properties.',
        'Safe formulation: Gentle on paint, rubber, and plastic surfaces.'
      ],
      icon: 'shield'
    },
    disinfectants: {
      title: 'Disinfectants',
      subtitle: 'Powerful Disinfection for Healthy Environments',
      description: 'Ensure a safe and hygienic environment with our range of powerful disinfectants. Our products effectively eliminate 99.9% of germs, bacteria, and viruses on various surfaces. Perfect for homes, offices, hospitals, and public spaces, our disinfectants provide peace of mind and protection.',
      highlight: 'Our hospital-grade disinfectants offer broad-spectrum protection while being safe for regular use on multiple surfaces.',
      benefits: [
        'Effective protection: Kills 99.9% of germs, bacteria, and viruses.',
        'Multi-surface use: Safe for floors, countertops, and high-touch surfaces.',
        'Quick action: Fast-acting formula with lasting protection.'
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
    return this.productImages[this.activeTab] || this.productImages['kitchenCare'];
  }

  getProductLabel(): string {
    return this.activeTab === 'fabricCare' ? 'Fabric Conditioner' : 'Cleaner';
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
    document.body.style.overflow = 'hidden';
  }

  closeImagePopup(): void {
    this.isImagePopupOpen = false;
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}