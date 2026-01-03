import { Component } from '@angular/core';
import { NotFound } from "../../not-found/not-found";
import { CommonModule } from '@angular/common';
interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  features?: string[];
  applications?: string[];
  benefits?: string[];
}

interface Category {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  color: string;
  products: Product[];
  keyFeatures?: string[];
}
@Component({
  selector: 'app-chemicals-for-cleaning',
  imports: [CommonModule],
  templateUrl: './chemicals-for-cleaning.html',
  styleUrl: './chemicals-for-cleaning.css',
})
export class ChemicalsForCleaning {
  selectedCategory: Category | null = null;
  selectedProduct: Product | null = null;

  categories: Category[] = [
    {
      id: 'kitchen',
      title: 'Kitchen Care',
      subtitle: 'Professional Kitchen Hygiene',
      description: 'Kitchen Care solutions designed to meet the highest standards of hygiene, safety and economy for both domestic and commercial environments. Advanced degreasing and antimicrobial agents effectively remove tough grease, food residues, spills and surface contaminants.',
      icon: 'bi-fire',
      color: '#2d5016',
      products: [
        {
          id: 'dish-wash-gel',
          name: 'Dish Wash Gel',
          description: 'High-performance gel for sparkling clean dishes',
          icon: 'bi-droplet-fill',
          color: '#2d5016',
          image: 'assets/products/kitchenCare/Dishwashgel_all.jpg.jpeg',
          features: ['Tough on grease', 'Gentle on hands', 'Pleasant fragrance', 'Concentrated formula'],
          applications: ['Utensils', 'Cookware', 'Cutlery', 'Kitchen surfaces']
        },
        {
          id: 'dish-wash-liquid',
          name: 'Dish Wash Liquid',
          description: 'Powerful liquid formula for everyday cleaning',
          icon: 'bi-moisture',
          color: '#3d6b1f',
          image: 'assets/products/kitchenCare/Dishwashliquid_1LMint.jpeg',
          features: ['Advanced degreasing', 'Quick rinsing', 'Streak-free shine', 'Cost-effective'],
          applications: ['Daily dishwashing', 'Countertops', 'Stoves', 'Commercial kitchens']
        },
        {
          id: 'utensil-cleaner',
          name: 'Utensil Cleaner',
          description: 'Specialized cleaner for all types of utensils',
          icon: 'bi-water',
          color: '#4d8629',
          image: 'assets/images/homecare/kitchen/utensil-cleaner.jpg', // unchanged
          features: ['Removes stubborn stains', 'Safe for all materials', 'Antibacterial action', 'Eco-friendly'],
          applications: ['Stainless steel', 'Aluminum', 'Non-stick cookware', 'Glass utensils']
        },
        {
          id: 'degreaser',
          name: 'Kitchen Degreaser',
          description: 'Industrial-strength grease remover',
          icon: 'bi-shield-fill-check',
          color: '#5ea332',
          image: 'assets/images/homecare/kitchen/degreaser.jpg', // unchanged
          features: ['Cuts through heavy grease', 'Fast-acting formula', 'Surface-safe', 'Professional grade'],
          applications: ['Exhaust fans', 'Ovens', 'Grills', 'Industrial kitchens']
        }
      ],
      keyFeatures: [
        'High-performance cleaning solutions',
        'Advanced degreasing agents',
        'Antimicrobial protection',
        'Safe for all kitchen surfaces',
        'Suitable for domestic and commercial use',
        'Cost-effective formulations'
      ]
    },
    {
      id: 'fabric',
      title: 'Fabric Care',
      subtitle: 'Superior Fabric Protection',
      description: 'Fabric Care solutions deliver exceptional cleaning performance while preserving the quality and lifespan of every fabric. Advanced surfactants, brightening agents and fabric-safe conditioners effectively remove dirt, stains and odors.',
      icon: 'bi-droplet',
      color: '#3d6b1f',
      products: [
        {
          id: 'liquid-detergent',
          name: 'Liquid Detergent',
          description: 'Premium liquid detergent for all fabrics',
          icon: 'bi-water',
          color: '#2d5016',
          image: 'assets/products/fabriCare/Detergentliquid_all.jpg.jpeg',
          features: ['Deep cleaning action', 'Color protection', 'Removes tough stains', 'Pleasant fragrance'],
          applications: ['Machine wash', 'Hand wash', 'All fabric types', 'White and colored clothes']
        },
        {
          id: 'fabric-softener',
          name: 'Fabric Softener',
          description: 'Luxurious softness and lasting freshness',
          icon: 'bi-flower2',
          color: '#3d6b1f',
          image: 'assets/products/fabriCare/Fabric-conditioner-500mL.jpg.jpeg',
          features: ['Ultra-soft finish', 'Long-lasting fragrance', 'Reduces static', 'Easy ironing'],
          applications: ['Final rinse', 'All fabrics', 'Towels and bedding', 'Delicate garments']
        },
        {
          id: 'stain-remover',
          name: 'Stain Remover',
          description: 'Powerful stain elimination formula',
          icon: 'bi-droplet-half',
          color: '#4d8629',
          image: 'assets/products/fabriCare/Cloth-Whitener.jpeg',
          features: ['Pre-wash treatment', 'Removes tough stains', 'Fabric-safe', 'Works on all colors'],
          applications: ['Oil stains', 'Food stains', 'Ink marks', 'Blood stains']
        },
        {
          id: 'detergent-powder',
          name: 'Detergent Powder',
          description: 'High-efficiency powder detergent',
          icon: 'bi-boxes',
          color: '#5ea332',
          image: 'assets/products/fabriCare/Detergent-powder.jpg.jpeg',
          features: ['Concentrated formula', 'Brightens whites', 'Economical', 'Suitable for hard water'],
          applications: ['Heavy-duty washing', 'Commercial laundry', 'Bulk washing', 'Industrial use']
        }
      ],
      keyFeatures: [
        'Exceptional cleaning performance',
        'Preserves fabric quality',
        'No fading or shrinkage',
        'Enhanced softness',
        'Long-lasting freshness',
        'Reduces rewash rates'
      ]
    },
    {
      id: 'bathroom',
      title: 'Bathroom Care',
      subtitle: 'Superior Hygiene & Shine',
      description: 'Bathroom Tiles & Toilet Care solutions ensure superior hygiene, long-lasting cleanliness, and effective protection. Advanced descaling, disinfecting and stain-removal agents eliminate hard water deposits, soap scum, and microbial contaminants.',
      icon: 'bi-droplet-fill',
      color: '#4d8629',
      products: [
        {
          id: 'toilet-cleaner',
          name: 'Toilet Cleaner',
          description: 'Powerful toilet bowl cleaning formula',
          icon: 'bi-droplet',
          color: '#2d5016',
          image: 'assets/products/toiletCare/Toilet-cleaner_500mL.jpg.jpeg',
          features: ['Kills 99.9% germs', 'Removes stains', 'Thick formula', 'Fresh fragrance'],
          applications: ['Toilet bowls', 'Under rim cleaning', 'Daily maintenance', 'Deep cleaning']
        },
        {
          id: 'tile-cleaner',
          name: 'Tile Cleaner',
          description: 'Restores shine to all types of tiles',
          icon: 'bi-grid-3x3',
          color: '#3d6b1f',
          image: 'assets/products/toiletCare/Tiles-cleaner_500mL.jpg.jpeg',
          features: ['Removes soap scum', 'Streak-free shine', 'Surface-safe', 'Quick drying'],
          applications: ['Ceramic tiles', 'Porcelain', 'Vitrified tiles', 'Wall and floor tiles']
        },
        {
          id: 'bathroom-descaler',
          name: 'Bathroom Descaler',
          description: 'Eliminates hard water deposits',
          icon: 'bi-gem',
          color: '#4d8629',
          image: 'assets/products/toiletCare/Tiles-cleaner_500mL.jpg.jpeg',
          features: ['Removes limescale', 'Restores shine', 'Prevents buildup', 'Non-corrosive'],
          applications: ['Faucets', 'Showerheads', 'Tiles', 'Glass panels']
        },
        {
          id: 'drain-cleaner',
          name: 'Drain Cleaner',
          description: 'Clears blocked drains effectively',
          icon: 'bi-funnel-fill',
          color: '#5ea332',
          image: 'assets/products/toiletCare/Tiles-cleaner_500mL.jpg.jpeg',
          features: ['Fast-acting', 'Dissolves blockages', 'Eliminates odors', 'Safe for pipes'],
          applications: ['Kitchen sinks', 'Bathroom drains', 'Floor drains', 'Shower drains']
        }
      ],
      keyFeatures: [
        'Superior hygiene standards',
        'Long-lasting cleanliness',
        'Advanced descaling agents',
        'Disinfecting properties',
        'Surface-safe formulations',
        'Suitable for all sanitary surfaces'
      ]
    },
    {
      id: 'floor',
      title: 'Floor Care',
      subtitle: 'Professional Floor Cleaning',
      description: 'Floor Care solutions deliver superior cleanliness, long-lasting shine, and enhanced surface protection. High-performance cleaning agents effectively remove dirt, stains, grease, and microbial deposits without damaging flooring materials.',
      icon: 'bi-grid',
      color: '#5ea332',
      products: [
        {
          id: 'floor-cleaner-lemon',
          name: 'Floor Cleaner - Lemon',
          description: 'Refreshing lemon-scented floor cleaner',
          icon: 'bi-brightness-high',
          color: '#94f050',
          image: 'assets/products/Floor-cleaner_Lemon_5L-229x300.jpg',
          features: ['Fresh lemon fragrance', 'Streak-free shine', 'Quick drying', 'Anti-bacterial'],
          applications: ['All floor types', 'Tile', 'Marble', 'Granite']
        },
        {
          id: 'floor-cleaner-pine',
          name: 'Floor Cleaner - Pine',
          description: 'Natural pine fragrance floor cleaner',
          icon: 'bi-tree',
          color: '#2d5016',
          image: 'assets/images/homecare/floor/floor-cleaner-pine.jpg',
          features: ['Natural pine scent', 'Deep cleaning', 'Long-lasting freshness', 'Kills germs'],
          applications: ['Residential', 'Commercial spaces', 'Offices', 'Institutions']
        },
        {
          id: 'floor-cleaner-floral',
          name: 'Floor Cleaner - Floral',
          description: 'Pleasant floral-scented floor cleaner',
          icon: 'bi-flower3',
          color: '#70bf3c',
          image: 'assets/images/homecare/floor/floor-cleaner-pine.jpg',
          features: ['Floral fragrance', 'Gentle formula', 'Suitable for all floors', 'No residue'],
          applications: ['Homes', 'Hotels', 'Healthcare', 'Public spaces']
        },
        {
          id: 'floor-cleaner-lavender',
          name: 'Floor Cleaner - Lavender',
          description: 'Calming lavender-scented floor cleaner',
          icon: 'bi-flower1',
          color: '#82d946',
          image: 'assets/images/homecare/floor/floor-cleaner-pine.jpg',
          features: ['Lavender aroma', 'Relaxing scent', 'Effective cleaning', 'Safe for pets'],
          applications: ['Bedrooms', 'Living rooms', 'Spa', 'Wellness centers']
        },
        {
          id: 'floor-polish',
          name: 'Floor Polish',
          description: 'Premium floor polishing solution',
          icon: 'bi-stars',
          color: '#4d8629',
          image: 'assets/images/homecare/floor/floor-cleaner-pine.jpg',
          features: ['High gloss finish', 'Protective coating', 'Long-lasting shine', 'Scratch resistant'],
          applications: ['Marble', 'Granite', 'Concrete', 'Vinyl']
        }
      ],
      keyFeatures: [
        'Superior cleanliness',
        'Long-lasting shine',
        'Enhanced surface protection',
        'Suitable for all floor types',
        'Multiple fragrance options',
        'Fast cleaning cycles'
      ]
    },
    {
      id: 'glass',
      title: 'Glass Care',
      subtitle: 'Crystal Clear Shine',
      description: 'High-performance glass cleaner formulation designed to remove dirt, dust, grease, fingerprints, and water marks. Delivers a fast-drying, streak-free finish, leaving surfaces sparkling clean and transparent.',
      icon: 'bi-square',
      color: '#70bf3c',
      products: [
        {
          id: 'glass-cleaner',
          name: 'Glass Cleaner',
          description: 'Professional streak-free glass cleaner',
          icon: 'bi-square',
          color: '#70bf3c',
          image: 'assets/images/homecare/glass/glass-cleaner.jpg',
          features: ['Streak-free finish', 'Fast-drying', 'Removes fingerprints', 'Anti-fog formula'],
          applications: ['Windows', 'Mirrors', 'Glass doors', 'Display cabinets'],
          benefits: ['Crystal clear results', 'No residue', 'Pleasant scent', 'Easy application']
        }
      ],
      keyFeatures: [
        'Removes dirt, dust, and grease',
        'Fast-drying formula',
        'Streak-free finish',
        'Sparkling transparency',
        'Suitable for all glass surfaces'
      ]
    },
    {
      id: 'auto',
      title: 'Auto Care',
      subtitle: 'Premium Vehicle Care',
      description: 'Auto Care range engineered to deliver high-performance cleaning, superior surface protection, and a premium finish. Advanced automotive-grade formulations ensure effective removal of dirt, grime, grease, and road contaminants.',
      icon: 'bi-car-front-fill',
      color: '#82d946',
      products: [
        {
          id: 'car-shampoo',
          name: 'Automobile Shampoo',
          description: 'Premium car wash shampoo',
          icon: 'bi-droplet-fill',
          color: '#2d5016',
          image: 'assets/images/homecare/auto/car-shampoo.jpg',
          features: ['pH balanced', 'Gentle on paint', 'Rich foam', 'Removes road grime'],
          applications: ['Exterior washing', 'Paint protection', 'All vehicle types', 'Professional detailing']
        },
        {
          id: 'tyre-polish',
          name: 'Tyre Polish',
          description: 'Long-lasting tyre shine and protection',
          icon: 'bi-circle',
          color: '#3d6b1f',
          image: 'assets/images/homecare/auto/tyre-polish.jpg',
          features: ['Deep black shine', 'UV protection', 'Prevents cracking', 'Water resistant'],
          applications: ['Tyres', 'Rubber trim', 'Bumpers', 'Exterior plastics']
        },
        {
          id: 'auto-glass-cleaner',
          name: 'Auto Glass Cleaner',
          description: 'Specialized automotive glass cleaner',
          icon: 'bi-square',
          color: '#4d8629',
          image: 'assets/images/homecare/auto/auto-glass-cleaner.jpg',
          features: ['Streak-free clarity', 'Rain repellent', 'Anti-fog', 'Safe for tinting'],
          applications: ['Windshields', 'Windows', 'Mirrors', 'Headlights']
        },
        {
          id: 'air-freshener',
          name: 'Air Freshener',
          description: 'Long-lasting car freshness',
          icon: 'bi-wind',
          color: '#5ea332',
          image: 'assets/images/homecare/auto/air-freshener.jpg',
          features: ['Multiple fragrances', 'Long-lasting', 'Eliminates odors', 'Compact design'],
          applications: ['Car interior', 'Dashboard', 'Under seats', 'Boot space']
        }
      ],
      keyFeatures: [
        'High-performance cleaning',
        'Superior surface protection',
        'Premium finish',
        'Automotive-grade formulations',
        'Suitable for all vehicle types',
        'Professional results'
      ]
    },
    {
      id: 'disinfectant',
      title: 'Disinfectant Liquids',
      subtitle: 'Advanced Germ Protection',
      description: 'Disinfectant range developed to deliver advanced protection, superior hygiene, and reliable germ elimination. High-efficacy antimicrobial agents effectively eliminate bacteria, viruses, fungi, and odor-causing microbes.',
      icon: 'bi-shield-fill-check',
      color: '#94f050',
      products: [
        {
          id: 'multi-purpose-disinfectant',
          name: 'Multi-Purpose Disinfectant',
          description: 'All-in-one disinfection solution',
          icon: 'bi-shield-check',
          color: '#2d5016',
          image: 'assets/products/toiletCare/Toilet-cleaning-acid_1L.png',
          features: ['Kills 99.9% germs', 'Broad spectrum', 'Fast action', 'Pleasant fragrance'],
          applications: ['Floors', 'Surfaces', 'Bathrooms', 'High-touch areas']
        },
        {
          id: 'phenyl',
          name: 'Phenyl',
          description: 'Traditional disinfectant cleaner',
          icon: 'bi-droplet',
          color: '#3d6b1f',
          image: 'assets/products/toiletCare/Toilet-cleaning-acid_1L.png',
          features: ['Strong disinfection', 'Odor control', 'Cost-effective', 'Concentrated formula'],
          applications: ['Washrooms', 'Drains', 'Public areas', 'Commercial spaces']
        },
        {
          id: 'surface-disinfectant',
          name: 'Surface Disinfectant',
          description: 'Specialized surface sanitizer',
          icon: 'bi-layers',
          color: '#4d8629',
          image: 'assets/products/toiletCare/Toilet-cleaning-acid_1L.png',
          features: ['Quick drying', 'No rinse needed', 'Safe for surfaces', 'Hospital-grade'],
          applications: ['Kitchen counters', 'Tables', 'Doorknobs', 'Equipment']
        }
      ],
      keyFeatures: [
        'Advanced antimicrobial protection',
        'Eliminates bacteria, viruses, fungi',
        'Fast-acting formula',
        'Long-lasting hygiene',
        'Surface-safe',
        'Suitable for diverse environments'
      ]
    },
    {
      id: 'specialty',
      title: 'Specialty Products',
      subtitle: 'Innovative Cleaning Solutions',
      description: 'Specialized and customized cleaning solutions for unique requirements. From enzyme-based cleaners to coconut oil-based formulations, we offer eco-friendly and high-performance alternatives.',
      icon: 'bi-star-fill',
      color: '#2d5016',
      products: [
        {
          id: 'multipurpose-cleaner',
          name: 'Multipurpose Cleaner',
          description: 'All-in-one cleaning solution',
          icon: 'bi-magic',
          color: '#2d5016',
          image: 'assets/images/homecare/specialty/multipurpose-cleaner.jpg',
          features: ['Versatile use', 'Effective on multiple surfaces', 'Economical', 'Pleasant scent'],
          applications: ['Kitchen', 'Bathroom', 'Living areas', 'Office spaces']
        },
        {
          id: 'soap-oil',
          name: 'Soap Oil',
          description: 'Traditional cleaning oil',
          icon: 'bi-droplet-half',
          color: '#3d6b1f',
          image: 'assets/products/kitchenCare/KIT-PRO-Kitchen-Oil-Grease-Remover.jpeg',
          features: ['Natural ingredients', 'Gentle cleaning', 'Multipurpose', 'Eco-friendly'],
          applications: ['General cleaning', 'Floor mopping', 'Surface wiping', 'Household use']
        },
        {
          id: 'brass-shiner',
          name: 'Brass Shiner',
          description: 'Restores brass to original shine',
          icon: 'bi-gem',
          color: '#4d8629',
          image: 'assets/products/kitchenCare/Brass-Shine_100mL-169x300.png',
          features: ['Removes tarnish', 'Protective coating', 'Easy application', 'Long-lasting shine'],
          applications: ['Brass items', 'Door handles', 'Decorative pieces', 'Utensils']
        },
        {
          id: 'silver-shiner',
          name: 'Silver Shiner',
          description: 'Professional silver polishing solution',
          icon: 'bi-star',
          color: '#5ea332',
          image: 'assets/products/kitchenCare/Silver-Shine_100mL.png',
          features: ['Instant shine', 'Anti-tarnish formula', 'Safe for silver', 'Easy to use'],
          applications: ['Silver jewelry', 'Silverware', 'Decorative items', 'Antiques']
        },
        {
          id: 'air-freshener-room',
          name: 'Room Air Freshener',
          description: 'Long-lasting room fragrance',
          icon: 'bi-wind',
          color: '#70bf3c',
          image: 'assets/products/Room freshener_all.png',
          features: ['Multiple fragrances', 'Eliminates odors', 'Long-lasting', 'Easy spray'],
          applications: ['Bedrooms', 'Living rooms', 'Offices', 'Bathrooms']
        },
        {
          id: 'coconut-cleaner',
          name: 'Coconut Oil Based Cleaner',
          description: 'Natural coconut oil cleaning power',
          icon: 'bi-droplet',
          color: '#94f050',
          image: 'assets/images/homecare/specialty/coconut-cleaner.jpg',
          features: ['Natural surfactants', 'Excellent degreasing', 'Biodegradable', 'Skin-safe'],
          applications: ['Kitchen cleaning', 'Utensils', 'Countertops', 'Equipment'],
          benefits: ['Eco-conscious', 'Non-toxic', 'Gentle yet effective', 'Sustainable']
        }
      ],
      keyFeatures: [
        'Innovative formulations',
        'Eco-friendly options',
        'Customized solutions available',
        'High-performance results',
        'Specialized applications',
        'Nature-derived ingredients'
      ]
    }
  ];

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
    event.target.style.display = 'none';
    const placeholder = event.target.parentElement;
    placeholder.innerHTML = `
      <div class="product-image-placeholder" style="background-color: ${this.selectedProduct?.color}20">
        <i class="bi ${this.selectedProduct?.icon}" style="color: ${this.selectedProduct?.color}; font-size: 80px;"></i>
      </div>
    `;
  }
}
