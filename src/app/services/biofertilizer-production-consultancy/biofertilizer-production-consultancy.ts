import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface BiofertilizerProduct {
  id: number;
  name: string;
  dosage: string;
  content: string;
  targetCrops: string;
  ingredients?: string;
  caution: string;
  applicationMethods: string[];
  icon: string;
  color: string;
  images: string[];  // Add this line
}
@Component({
  selector: 'app-biofertilizer-production-consultancy',
  imports: [CommonModule, FormsModule],
  templateUrl: './biofertilizer-production-consultancy.html',
  styleUrl: './biofertilizer-production-consultancy.css',
})
export class BiofertilizerProductionConsultancy {
  selectedProduct: BiofertilizerProduct | null = null;
  showModal: boolean = false;
  showImageModal: boolean = false;
  currentImageSrc: string = '';
  currentImageIndex: number = 0;  // Add this
  activeTab: string = 'all';
  searchQuery: string = '';
  isScrolled: boolean = false;

  products: BiofertilizerProduct[] = [
    {
      id: 1,
      name: 'Azospirillum',
      dosage: '2 L/acre for all the methods',
      content: 'Azospirillum is a free living gram-negative bacterium responsible for fixing nitrogen. This is a non-fermentative, aerobic species. It is a plant growth promotor which colonizes on the surface of roots and these don\'t produce root nodes. It will secrete plant hormones and helps in root branching and growth of hairy roots.',
      targetCrops: 'Rice, maize, wheat, sorghum, millets, sugarcane, Groundnut, soybean, mustard, sesame, Cotton, chilly, lime, coffee, tea, spices, herbs, banana, and coconut. All types of fruit plants and flowering plants.',
      caution: 'Store in cool, dry place. Keep away from children. Handle with care. Only for agriculture applications. Best to use before 1 year from manufacturing date. After opening the seal, use the contents within a month.',
      applicationMethods: ['Seed Treatment', 'Soil Treatment', 'Drip Irrigation'],
      icon: '🌱',
      color: '#4CAF50',
      images: [
        'assets/spl_products/ARAN - N Azospirillum Front 5 L.jpeg',
        'assets/spl_products/ARAN - N Azospirillum Back 1 L.jpg',
        'assets/spl_products/ARAN - N Azospirillum Back 5 L.jpeg',
        'assets/spl_products/ARAN - N Azospirillum Front 1 L.jpg'
      ]
    },
    {
      id: 2,
      name: 'Rhizobium',
      dosage: '2 L/acre for all the methods',
      content: 'Rhizobium is a gram-negative bacterium responsible for fixing nitrogen. Rhizobium species form an endosymbiotic nitrogen-fixing association with roots. It is a plant growth promotor which forms and lives in root nodes. It plays an important role in legume plants by fixing atmospheric nitrogen in root nodes.',
      targetCrops: 'Groundnut, soybean, red-gram, green-gram, black-gram, lentil, cowpea, and chickpea. All the legume plants.',
      caution: 'Store in cool, dry place. Keep away from children. Handle with care. Only for agriculture applications. Best to use before 1 year from manufacturing date. After opening the seal, use the contents within a month.',
      applicationMethods: ['Seed Treatment', 'Soil Treatment', 'Drip Irrigation'],
      icon: '🌿',
      color: '#8BC34A',
      images: [
        'assets/spl_products/ARAN - N Rhizobium Back 1 L.jpg',
        'assets/spl_products/ARAN - N Rhizobium Back 5 L.jpeg',
        'assets/spl_products/ARAN - N Rhizobium Front 1 L.jpg',
        'assets/spl_products/ARAN - N Rhizobium Front 5 L.jpeg'
      ]
    },
    {
      id: 3,
      name: 'Acetobacter',
      dosage: '2 L/acre for all the methods',
      content: 'Acetobacter is a nitrogen-fixing bacteria used as a biofertilizer, particularly beneficial for sugarcane and other crops. It colonizes plant roots, stems, and leaves, converting atmospheric nitrogen into a usable form for the plant. This process enhances plant growth, improves soil fertility, and reduces the need for synthetic nitrogen fertilizers.',
      targetCrops: 'Sugarcane, cereals (like wheat and maize), pulses (like lentils and chickpeas), oil seeds (like groundnut and mustard), and vegetables (like tomatoes and eggplants). Fruits like grapes, guava, mango, and banana. All types of flowering plants.',
      caution: 'Store in cool, dry place. Keep away from children. Handle with care. Only for agriculture applications. Best to use before 1 year from manufacturing date. After opening the seal, use the contents within a month.',
      applicationMethods: ['Seed Treatment', 'Soil Treatment', 'Drip Irrigation'],
      icon: '🌾',
      color: '#CDDC39',
      images: [
        'assets/spl_products/ARAN - N Acetobacter Back 1 L.jpg',
        'assets/spl_products/ARAN - N Acetobacter Back 5 L.jpeg',
        'assets/spl_products/ARAN - N Acetobacter Front 1 L.jpg',
        'assets/spl_products/ARAN - N Acetobacter Front 5 L.jpeg'
      ]
    },
    {
      id: 4,
      name: 'Azotobacter',
      dosage: '2 L/acre for all the methods',
      content: 'Azotobacter is a bacteria known for its ability to fix nitrogen from the atmosphere into a usable form for plants. These free-living, aerobic bacteria are crucial in the nitrogen cycle. Azotobacter also produces growth-promoting substances and helps in disease suppression, further enhancing plant growth.',
      targetCrops: 'Sugarcane, cereals (like wheat and maize), pulses (like lentils and chickpeas), oil seeds (like groundnut and mustard), and vegetables (like tomatoes and eggplants). Fruits like grapes, guava, mango, and banana. All types of flowering plants.',
      caution: 'Store in cool, dry place. Keep away from children. Handle with care. Only for agriculture applications. Best to use before 1 year from manufacturing date. After opening the seal, use the contents within a month.',
      applicationMethods: ['Seed Treatment', 'Soil Treatment', 'Drip Irrigation'],
      icon: '🌻',
      color: '#FFC107',
      images: [
        'assets/spl_products/ARAN - N Azotobactor Back 1 L.jpg',
        'assets/spl_products/ARAN - N Azotobactor Back 5 L.jpeg',
        'assets/spl_products/ARAN - N Azotobactor Front 1 L.jpg',
        'assets/spl_products/ARAN - N Azotobactor Front 5 L.jpeg'
      ]
    },
    {
      id: 5,
      name: 'KSB (Potassium Solubilizing Bacteria)',
      dosage: '2 L/acre for all the methods',
      content: 'KSB, or Potassium Solubilizing Bacteria, is a type of biofertilizer that enhances the availability of potassium in the soil for plant uptake. It contains beneficial bacteria that convert insoluble potassium compounds into soluble forms that plants can readily absorb.',
      targetCrops: 'All types of crops.',
      ingredients: 'KSB 1 x 10⁹ cfu/mL.',
      caution: 'Store in cool, dry place. Keep away from children. Handle with care. Only for agriculture applications. Best to use before 1 year from manufacturing date. After opening the seal, use the contents within a month.',
      applicationMethods: ['Seed Treatment', 'Soil Treatment', 'Drip Irrigation', 'Soil drench', 'Flooding irrigation', 'Apply with FYM/compost/oil cakes/soil'],
      icon: '💧',
      color: '#FF9800',
      images: [
        'assets/spl_products/ARAN - N Potassium Solubilizing Bacteria (KSB) Back 1 L.jpg',
        'assets/spl_products/ARAN - N Potassium Solubilizing Bacteria (KSB) Back 5 L.jpeg',
        'assets/spl_products/ARAN - N Potassium Solubilizing Bacteria (KSB) Front 1 L.jpg',
        'assets/spl_products/ARAN - N Potassium Solubilizing Bacteria (KSB) Front 5 L.jpeg'
      ]
    },
    {
      id: 6,
      name: 'PSB (Phosphate Solubilizing Bacteria)',
      dosage: '2 L/acre for all the methods',
      content: 'Phosphate solubilizing bacteria (PSB) are microorganisms that convert insoluble forms of phosphorus in the soil into soluble forms that plants can readily absorb. PSB release organic acids, protons, and enzymes (like phosphatases) that break down insoluble phosphates into soluble forms. PSB can also enhance the availability of other nutrients like zinc and iron.',
      targetCrops: 'All types of crops.',
      caution: 'Store in cool, dry place. Keep away from children. Handle with care. Only for agriculture applications. Best to use before 1 year from manufacturing date. After opening the seal, use the contents within a month.',
      applicationMethods: ['Seed Treatment', 'Soil Treatment', 'Drip Irrigation', 'Soil drench', 'Flooding irrigation'],
      icon: '🌺',
      color: '#E91E63',
      images: [
        'assets/spl_products/ARAN - P Phosphate Solubilizing Bacteria (PSB) Back 1 L.jpg',
        'assets/spl_products/ARAN - P Phosphate Solubilizing Bacteria (PSB) Back 5 L.jpeg',
        'assets/spl_products/ARAN - P Phosphate Solubilizing Bacteria (PSB) Front 1 L.jpg',
        'assets/spl_products/ARAN - P Phosphate Solubilizing Bacteria (PSB) Front 5 L.jpeg'
      ]
    },
    {
      id: 7,
      name: 'ZSB (Zinc Solubilizing Bacteria)',
      dosage: '2 L/acre for all the methods',
      content: 'Zinc solubilizing bacteria (ZSB) biofertilizers are a type of biofertilizer that contains beneficial microorganisms that can convert insoluble zinc compounds in the soil into a form that plants can readily absorb. ZSB biofertilizers contain specific strains of bacteria, often belonging to genera like Bacillus, Pseudomonas, and Priestia, which are capable of solubilizing zinc.',
      targetCrops: 'All types of crops.',
      caution: 'Store in cool, dry place. Keep away from children. Handle with care. Only for agriculture applications. Best to use before 1 year from manufacturing date. After opening the seal, use the contents within a month.',
      applicationMethods: ['Seed Treatment', 'Soil Treatment', 'Drip Irrigation'],
      icon: '⚡',
      color: '#9C27B0',
      images: [
        'assets/spl_products/ARAN - Zn Zinc Solubilizing Bacteria (ZnSB) Back 1 L.jpg',
        'assets/spl_products/ARAN - Zn Zinc Solubilizing Bacteria (ZnSB) Back 5 L.jpeg',
        'assets/spl_products/ARAN - Zn Zinc Solubilizing Bacteria (ZnSB) Front 1 L.jpg',
        'assets/spl_products/ARAN - Zn Zinc Solubilizing Bacteria (ZnSB) Front 5 L.jpeg'
      ]
    },
    {
      id: 8,
      name: 'SSB (Sulphur Solubilizing Bacteria)',
      dosage: '2 L/acre for all the methods',
      content: 'Sulphur solubilizing bacteria (SSB) are a type of biofertilizer that helps plants access sulfur, an essential nutrient, more effectively. These bacteria convert insoluble forms of sulfur in the soil into soluble forms that plants can readily absorb. This process not only increases the availability of sulfur but also enhances the uptake of other nutrients like nitrogen and phosphorus, leading to improved plant growth and yield.',
      targetCrops: 'All types of crops.',
      caution: 'Store in cool, dry place. Keep away from children. Handle with care. Only for agriculture applications. Best to use before 1 year from manufacturing date. After opening the seal, use the contents within a month.',
      applicationMethods: ['Seed Treatment', 'Soil Treatment', 'Drip Irrigation'],
      icon: '🔥',
      color: '#FF5722',
      images: [
        'assets/spl_products/ARAN - S Sulphur Solubilizing Bacteria (SSB) Back 1 L.jpg',
        'assets/spl_products/ARAN - S Sulphur Solubilizing Bacteria (SSB) Back 5 L.jpeg',
        'assets/spl_products/ARAN - S Sulphur Solubilizing Bacteria (SSB) Front 1 L.jpg',
        'assets/spl_products/ARAN - S Sulphur Solubilizing Bacteria (SSB) Front 5 L.jpeg'
      ]
    }
  ];

  filteredProducts: BiofertilizerProduct[] = [];

  ngOnInit(): void {
    this.filteredProducts = [...this.products];

    // Add scroll listener
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  openProductDetails(product: BiofertilizerProduct): void {
    this.selectedProduct = product;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProduct = null;
    document.body.style.overflow = 'auto';
  }

  openImageModal(imageSrc: string): void {
    this.currentImageSrc = imageSrc;
    this.showImageModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeImageModal(): void {
    this.showImageModal = false;
    this.currentImageSrc = '';
    document.body.style.overflow = 'auto';
  }

  filterProducts(tab: string): void {
    this.activeTab = tab;
    if (tab === 'all') {
      this.filteredProducts = [...this.products];
    } else if (tab === 'nitrogen') {
      this.filteredProducts = this.products.filter(p =>
        ['Azospirillum', 'Rhizobium', 'Acetobacter', 'Azotobacter'].includes(p.name)
      );
    } else if (tab === 'nutrients') {
      this.filteredProducts = this.products.filter(p =>
        ['KSB (Potassium Solubilizing Bacteria)', 'PSB (Phosphate Solubilizing Bacteria)', 'ZSB (Zinc Solubilizing Bacteria)', 'SSB (Sulphur Solubilizing Bacteria)'].includes(p.name)
      );
    }
    this.applySearch();
  }

  private applySearch(): void {
    const query = this.searchQuery.toLowerCase();
    if (query) {
      this.filteredProducts = this.filteredProducts.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query) ||
        p.targetCrops.toLowerCase().includes(query)
      );
    } else {
      this.filterProducts(this.activeTab);
    }
  }

  downloadProductInfo(product: BiofertilizerProduct): void {
    alert(`Download functionality for ${product.name} would be implemented here`);
  }

  shareProduct(product: BiofertilizerProduct): void {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.content,
        url: window.location.href
      });
    } else {
      alert('Sharing not supported on this browser');
    }
  }

  nextImage(): void {
    if (this.selectedProduct && this.selectedProduct.images) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedProduct.images.length;
    }
  }

  previousImage(): void {
    if (this.selectedProduct && this.selectedProduct.images) {
      this.currentImageIndex = this.currentImageIndex === 0
        ? this.selectedProduct.images.length - 1
        : this.currentImageIndex - 1;
    }
  }

}
