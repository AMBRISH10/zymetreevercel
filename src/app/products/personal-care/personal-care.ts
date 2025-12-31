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
  selector: 'app-personal-care',
  imports: [CommonModule],
  templateUrl: './personal-care.html',
  styleUrl: './personal-care.css',
})
export class PersonalCare {
  activeTab: string = 'handmadeSoap';
  isVisible: { [key: string]: boolean } = {};
  private observer!: IntersectionObserver;

  // Fullscreen image popup properties
  isImagePopupOpen: boolean = false;
  selectedImage: ProductImage | null = null;

  products: { [key: string]: Product[] } = {
    handmadeSoap: [
      { name: 'Aloevera Soap', desc: 'Soothing & Moisturizing' },
      { name: 'Coal Soap', desc: 'Deep Cleansing & Detox' },
      { name: 'Coffee Soap', desc: 'Exfoliating & Energizing' },
      { name: 'Neem Soap', desc: 'Antibacterial & Purifying' },
      { name: 'Orange Soap', desc: 'Brightening & Refreshing' },
      { name: 'Rose Soap', desc: 'Gentle & Aromatic' },
      { name: 'Sandal Soap', desc: 'Calming & Nourishing' }
    ],
    sanitaryNapkin: [
      { name: '100% Cotton Pads', desc: 'Regular Flow' },
      { name: '100% Cotton Pads', desc: 'Heavy Flow' },
      { name: '100% Cotton Pads', desc: 'Overnight Protection' },
      { name: 'Panty Liners', desc: 'Daily Use' },
      { name: 'Maternity Pads', desc: 'Extra Large' },
      { name: 'Organic Cotton Pads', desc: 'Sensitive Skin' }
    ]
  };

  // Product images for each tab
  productImages: { [key: string]: ProductImage[] } = {
    handmadeSoap: [
      {
        label: 'Aloevera Soap',
        size: 'Handmade',
        containerSize: '100g',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/handmadeSoap/aloevera_soap.jpeg'
      },
      {
        label: 'Coal Soap',
        size: 'Handmade',
        containerSize: '100g',
        cardClass: 'gray-card',
        boxClass: 'gray-box',
        imageUrl: 'assets/products/handmadeSoap/coal_soap.jpeg'
      },
      {
        label: 'Coffee Soap',
        size: 'Handmade',
        containerSize: '100g',
        cardClass: 'brown-card',
        boxClass: 'brown-box',
        imageUrl: 'assets/products/handmadeSoap/coffee_soap.jpeg'
      },
      {
        label: 'Neem Soap',
        size: 'Handmade',
        containerSize: '100g',
        cardClass: 'green-card',
        boxClass: 'green-box',
        imageUrl: 'assets/products/handmadeSoap/neem_soap.jpeg'
      },
      {
        label: 'Orange Soap',
        size: 'Handmade',
        containerSize: '100g',
        cardClass: 'orange-card',
        boxClass: 'orange-box',
        imageUrl: 'assets/products/handmadeSoap/orange_soap.jpeg'
      },
      {
        label: 'Rose Soap',
        size: 'Handmade',
        containerSize: '100g',
        cardClass: 'pink-card',
        boxClass: 'pink-box',
        imageUrl: 'assets/products/handmadeSoap/rose_soap.jpeg'
      },
      {
        label: 'Sandal Soap',
        size: 'Handmade',
        containerSize: '100g',
        cardClass: 'beige-card',
        boxClass: 'beige-box',
        imageUrl: 'assets/products/handmadeSoap/sandal_soap.jpeg'
      }
    ],
    sanitaryNapkin: [
      {
        label: '100% Cotton Pad - Regular',
        size: 'Eco-Friendly',
        containerSize: '10 Pads',
        cardClass: 'blue-card',
        boxClass: 'blue-box',
        imageUrl: 'assets/products/sanitaryNapkin/regular-flow.jpeg'
      },
      {
        label: '100% Cotton Pad - Heavy',
        size: 'Eco-Friendly',
        containerSize: '10 Pads',
        cardClass: 'purple-card',
        boxClass: 'purple-box',
        imageUrl: 'assets/products/sanitaryNapkin/heavy-flow.jpeg'
      },
      {
        label: '100% Cotton Pad - Overnight',
        size: 'Eco-Friendly',
        containerSize: '8 Pads',
        cardClass: 'pink-card',
        boxClass: 'pink-box',
        imageUrl: 'assets/products/sanitaryNapkin/overnight.jpeg'
      }
    ]
  };

  tabContent: { [key: string]: TabContent } = {
    handmadeSoap: {
      title: 'Customized Cold Processed Handmade Soap',
      subtitle: 'Pure Natural Ingredients for Healthy Skin',
      description: 'Our cold-processed handmade soaps are crafted with love using premium natural plant oils, nourishing butters, and botanical extracts. Each bar is carefully made to preserve the natural glycerin and beneficial properties of the ingredients. Free from harsh chemicals, synthetic fragrances, and artificial colors, our soaps gently cleanse while hydrating and nourishing your skin. Perfect for all skin types, including sensitive skin.',
      highlight: 'Experience the luxury of pure, handcrafted soap that transforms your daily cleansing ritual into a spa-like experience. Our cold-process method ensures maximum retention of nutrients and natural benefits.',
      benefits: [
        'Natural Ingredients: Made with plant-based oils, shea butter, and essential oils.',
        'Chemical-Free: No parabens, sulfates, or synthetic additives.',
        'Skin-Friendly: Gentle pH balance suitable for all skin types.',
        'Eco-Friendly: Biodegradable and packaged in sustainable materials.',
        'Handcrafted Quality: Each bar is individually made and cured for 4-6 weeks.'
      ],
      icon: 'droplets'
    },
    sanitaryNapkin: {
      title: '100% Cotton Eco-Friendly Sanitary Napkin',
      subtitle: 'Breathable, Comfortable & Sustainable Protection',
      description: 'Our 100% cotton sanitary napkins provide gentle, breathable protection during your menstrual cycle. Made entirely from natural cotton without any synthetic materials, plastic, or chemicals, these pads offer superior comfort and safety. The ultra-soft cotton top layer is gentle on sensitive skin, preventing irritation and rashes. Completely biodegradable, our napkins are an eco-conscious choice for modern women who care about their health and the environment.',
      highlight: 'Choose health and sustainability with our premium cotton sanitary napkins. Experience the difference of natural materials that care for your body and the planet.',
      benefits: [
        'Pure Cotton: 100% natural cotton without synthetics or plastics.',
        'Breathable Design: Allows air circulation to prevent moisture and odor.',
        'Hypoallergenic: Free from chemicals, dyes, and fragrances that cause irritation.',
        'Biodegradable: Decomposes naturally, reducing environmental impact.',
        'Comfortable Fit: Soft, flexible design that moves with your body.',
        'Safe & Healthy: No harmful chemicals in contact with your skin.'
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
    return this.productImages[this.activeTab] || this.productImages['handmadeSoap'];
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