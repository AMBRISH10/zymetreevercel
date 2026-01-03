import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  targetCrops?: string;
  keyFeatures?: string[];
  applicationMethod?: string;
  dosage?: string;
}

interface Category {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  products: Product[];
  benefits?: string[];
}

interface ChemicalProduct {
  productTitle: string;
  imageUrl: string;
}
@Component({
  selector: 'app-agro',
  imports: [CommonModule],
  templateUrl: './agro.html',
  styleUrl: './agro.css'
  // animations: [
  //   trigger('fadeInUp', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'translateY(30px)' }),
  //       animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  //     ])
  //   ]),
  //   trigger('staggerFadeIn', [
  //     transition('* => *', [
  //       query(':enter', [
  //         style({ opacity: 0, transform: 'translateY(30px)' }),
  //         stagger(100, [
  //           animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  //         ])
  //       ], { optional: true })
  //     ])
  //   ]),
  //   trigger('scaleIn', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'scale(0.8)' }),
  //       animate('0.5s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'scale(1)' }))
  //     ])
  //   ]),
  //   trigger('fadeIn', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('0.3s ease-out', style({ opacity: 1 }))
  //     ]),
  //     transition(':leave', [
  //       animate('0.3s ease-out', style({ opacity: 0 }))
  //     ])
  //   ]),
  //   trigger('slideUp', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'translateY(50px) scale(0.9)' }),
  //       animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
  //     ]),
  //     transition(':leave', [
  //       animate('0.3s ease-out', style({ opacity: 0, transform: 'translateY(30px) scale(0.95)' }))
  //     ])
  //   ])
  // ]
})
export class Agro {
  selectedCategory: Category | null = null;
  selectedProduct: Product | null = null;
  chemicalInventory: ChemicalProduct[] = [];
  selectedItemIndex: number = 0;
  isLightboxVisible: boolean = false;
  categories: Category[] = [
    {
      id: 'biofertilizer',
      title: 'Bio Fertilizer',
      subtitle: 'Microbial Growth Promoter',
      description: 'Natural microbial products that supply essential nutrients to plants by improving soil biological activity. These beneficial microbes help plants absorb nitrogen, phosphorus, potassium, and trace minerals more efficiently.',
      icon: 'bi-flower3',
      products: [
        {
          id: 'azospirillum',
          name: 'Azospirillum',
          description: 'Nitrogen-fixing bacteria for cereal and millet crops',
          icon: 'bi-droplet-fill',
          color: '#2d5016',
          image: 'assets/images/biofertilizer/azospirillum.jpg',
          targetCrops: 'Cereals, Millets, Grasses',
          keyFeatures: ['Fixes atmospheric nitrogen', 'Promotes root growth', 'Enhances nutrient uptake'],
          applicationMethod: 'Seed treatment, Soil application, Root dipping',
          dosage: '2-4 liters per acre'
        },
        {
          id: 'rhizobium',
          name: 'Rhizobium',
          description: 'Nitrogen-fixing bacteria for legume crops',
          icon: 'bi-moisture',
          color: '#3d6b1f',
          image: 'assets/images/biofertilizer/rhizobium.jpg',
          targetCrops: 'Pulses, Legumes (Peas, Beans, Groundnut)',
          keyFeatures: ['Forms root nodules', 'Fixes atmospheric nitrogen', 'Reduces fertilizer cost'],
          applicationMethod: 'Seed treatment, Seedling root dip',
          dosage: '200-250g per 10kg seeds'
        },
        {
          id: 'acetobacter',
          name: 'Acetobacter',
          description: 'Nitrogen-fixing bacteria for sugarcane and other crops',
          icon: 'bi-water',
          color: '#4d8629',
          image: 'assets/images/biofertilizer/acetobacter.jpg',
          targetCrops: 'Sugarcane, Rice, Cotton',
          keyFeatures: ['Fixes nitrogen in soil', 'Improves soil health', 'Increases sugar content'],
          applicationMethod: 'Soil application, Root dipping',
          dosage: '4 liters per acre'
        },
        {
          id: 'azotobacter',
          name: 'Azotobacter',
          description: 'Free-living nitrogen-fixing bacteria',
          icon: 'bi-cloud-drizzle',
          color: '#5ea332',
          image: 'assets/images/biofertilizer/azotobacter.jpg',
          targetCrops: 'All crops including vegetables, fruits',
          keyFeatures: ['Free-living N-fixer', 'Produces growth hormones', 'Improves germination'],
          applicationMethod: 'Seed treatment, Soil application',
          dosage: '2-4 liters per acre'
        },
        {
          id: 'psb',
          name: 'Phosphorous Solubilizing Bacteria (PSB)',
          description: 'Converts insoluble phosphate into plant-available form',
          icon: 'bi-gem',
          color: '#70bf3c',
          image: 'assets/images/biofertilizer/psb.jpg',
          targetCrops: 'All crops',
          keyFeatures: ['Solubilizes phosphorus', 'Enhances root development', 'Improves flowering'],
          applicationMethod: 'Seed treatment, Soil application',
          dosage: '2-4 liters per acre'
        },
        {
          id: 'kmb',
          name: 'Potassium Mobilizing Bacteria (KMB)',
          description: 'Mobilizes potassium from soil reserves',
          icon: 'bi-lightning-fill',
          color: '#82d946',
          image: 'assets/images/biofertilizer/kmb.jpg',
          targetCrops: 'All crops',
          keyFeatures: ['Mobilizes potassium', 'Improves disease resistance', 'Enhances fruit quality'],
          applicationMethod: 'Seed treatment, Soil application',
          dosage: '2-4 liters per acre'
        },
        {
          id: 'vam',
          name: 'Mycorrhizal Biofertilizer (VAM)',
          description: 'Vesicular Arbuscular Mycorrhiza for nutrient absorption',
          icon: 'bi-diagram-3-fill',
          color: '#94f050',
          image: 'assets/images/biofertilizer/vam.jpg',
          targetCrops: 'Fruit crops, Vegetables, Plantation crops',
          keyFeatures: ['Increases nutrient uptake', 'Enhances drought tolerance', 'Extends root system'],
          applicationMethod: 'Soil application, Seedling root dip',
          dosage: '4-5 kg per acre'
        },
        {
          id: 'npk-consortia',
          name: 'NPK Consortia',
          description: 'Combined consortium of N, P, K microbes',
          icon: 'bi-diagram-2-fill',
          color: '#2d5016',
          image: 'assets/images/biofertilizer/npk-consortia.jpg',
          targetCrops: 'All crops',
          keyFeatures: ['Complete nutrition', 'Multiple benefits', 'Cost-effective'],
          applicationMethod: 'Seed treatment, Soil application',
          dosage: '2-4 liters per acre'
        }
      ],
      benefits: [
        'Eco-friendly alternative to chemical fertilizers',
        'Improves soil fertility naturally without pollution',
        'Enhances nutrient uptake (N, P, K, micronutrients)',
        'Cost-effective and reduces chemical fertilizer use by 20-40%',
        'Increases crop yield',
        'Promotes sustainable agriculture'
      ]
    },
    {
      id: 'micronutrients',
      title: 'Micro Nutrients Bio Fertilizer',
      description: 'Specialized microorganisms that solubilize essential micronutrients making them available for plant uptake.',
      icon: 'bi-boxes',
      products: [
        {
          id: 'znsb',
          name: 'Zinc Solubilizing Bacteria (ZnSB)',
          description: 'Solubilizes zinc from soil reserves',
          icon: 'bi-hexagon-fill',
          color: '#3d6b1f',
          image: 'assets/images/biofertilizer/micronutrients/znsb.jpg',
          targetCrops: 'All crops, especially rice, wheat, cotton',
          keyFeatures: ['Solubilizes zinc', 'Prevents zinc deficiency', 'Improves immunity'],
          applicationMethod: 'Seed treatment, Soil application',
          dosage: '2-3 liters per acre'
        },
        {
          id: 'sisb',
          name: 'Silica Solubilizing Bacteria (SiSB)',
          description: 'Mobilizes silica for stronger plant structure',
          icon: 'bi-pentagon-fill',
          color: '#4d8629',
          image: 'assets/images/biofertilizer/micronutrients/sisb.jpg',
          targetCrops: 'Rice, Sugarcane, Bamboo',
          keyFeatures: ['Strengthens cell walls', 'Improves pest resistance', 'Enhances lodging resistance'],
          applicationMethod: 'Soil application, Foliar spray',
          dosage: '2-3 liters per acre'
        },
        {
          id: 'ssb',
          name: 'Sulphur Solubilizing Bacteria (SSB)',
          description: 'Converts insoluble sulphur into available form',
          icon: 'bi-circle-fill',
          color: '#5ea332',
          image: 'assets/images/biofertilizer/micronutrients/ssb.jpg',
          targetCrops: 'Oilseeds, Pulses, Vegetables',
          keyFeatures: ['Provides sulphur nutrition', 'Improves protein synthesis', 'Enhances oil content'],
          applicationMethod: 'Seed treatment, Soil application',
          dosage: '2-3 liters per acre'
        }
      ],
      benefits: [
        'Addresses micronutrient deficiencies',
        'Improves plant immunity and vigor',
        'Enhances crop quality and yield',
        'Eco-friendly and sustainable'
      ]
    },
    {
      id: 'biocontrol',
      title: 'Bio Control Microbes',
      subtitle: 'Biological Pest Management',
      description: 'Beneficial microorganisms including bacteria, fungi, and yeasts that suppress plant pests, pathogens, or diseases through natural biological mechanisms.',
      icon: 'bi-shield-fill-check',
      products: [
        {
          id: 'trichoderma',
          name: 'Trichoderma',
          description: 'Fungal biocontrol agent against soil-borne diseases',
          icon: 'bi-bug-fill',
          color: '#2d5016',
          image: 'assets/images/biocontrol/trichoderma.jpg',
          targetCrops: 'All crops',
          keyFeatures: ['Controls fungal diseases', 'Promotes plant growth', 'Improves soil health'],
          applicationMethod: 'Seed treatment, Soil application, Foliar spray',
          dosage: '2-4 liters per acre'
        },
        {
          id: 'pseudomonas',
          name: 'Pseudomonas fluorescens',
          description: 'Bacterial biocontrol for root diseases',
          icon: 'bi-shield-check',
          color: '#3d6b1f',
          image: 'assets/images/biocontrol/pseudomonas.jpg',
          targetCrops: 'All crops',
          keyFeatures: ['Controls bacterial diseases', 'Produces antibiotics', 'Induces systemic resistance'],
          applicationMethod: 'Seed treatment, Soil drench, Root dipping',
          dosage: '2-3 liters per acre'
        },
        {
          id: 'bacillus',
          name: 'Bacillus subtilis',
          description: 'Broad-spectrum biocontrol agent',
          icon: 'bi-shield-fill-plus',
          color: '#4d8629',
          image: 'assets/images/biocontrol/bacillus.jpg',
          targetCrops: 'All crops',
          keyFeatures: ['Controls multiple pathogens', 'Long shelf life', 'Systemic action'],
          applicationMethod: 'Seed treatment, Soil application, Foliar spray',
          dosage: '2-4 liters per acre'
        },
        {
          id: 'metarhizium',
          name: 'Metarhizium',
          description: 'Entomopathogenic fungus for insect control',
          icon: 'bi-virus',
          color: '#5ea332',
          image: 'assets/images/biocontrol/metarhizium.jpg',
          targetCrops: 'All crops',
          keyFeatures: ['Controls insects naturally', 'Safe for beneficial insects', 'Long-lasting effect'],
          applicationMethod: 'Foliar spray, Soil application',
          dosage: '2-3 liters per acre'
        }
      ],
      benefits: [
        'Environmentally friendly',
        'Safe for humans and non-target organisms',
        'Sustainable and long-term control',
        'Reduces pesticide resistance',
        'Cost-effective over time',
        'Improves soil health and biodiversity',
        'Compatible with Integrated Pest Management (IPM)',
        'Meets consumer demand for organic produce'
      ]
    },
    {
      id: 'soil-conditioner',
      title: 'Soil Conditioner',
      subtitle: 'Organic Soil Enhancement',
      description: 'Materials added to soil to improve its physical properties, making it more suitable for plant growth. Enhances soil structure, aeration, water retention and overall health.',
      icon: 'bi-layers-fill',
      products: [
        {
          id: 'bio-enriched',
          name: 'Bio Enriched Organic Compost',
          description: 'Enriched compost with beneficial microorganisms',
          icon: 'bi-basket3-fill',
          color: '#2d5016',
          image: 'assets/images/soil-conditioner/bio-enriched-compost.jpg',
          keyFeatures: ['Rich in organic matter', 'Contains beneficial microbes', 'Improves soil structure', 'Slow nutrient release'],
          applicationMethod: 'Mix with soil during planting or top dressing',
          dosage: '5-10 kg per plant or 500-1000 kg per acre'
        },
        {
          id: 'vermicompost',
          name: 'Vermicompost',
          description: 'Premium quality earthworm compost',
          icon: 'bi-egg-fill',
          color: '#3d6b1f',
          image: 'assets/images/soil-conditioner/vermicompost.jpg',
          keyFeatures: ['High nutrient content', 'Rich in beneficial enzymes', 'Improves water retention', 'Natural pest repellent'],
          applicationMethod: 'Mix with soil or apply as top dressing',
          dosage: '2-5 kg per plant or 300-500 kg per acre'
        },
        {
          id: 'city-compost',
          name: 'City Compost',
          description: 'Recycled urban organic waste compost',
          icon: 'bi-recycle',
          color: '#4d8629',
          image: 'assets/images/soil-conditioner/city-compost.jpg',
          keyFeatures: ['Eco-friendly waste management', 'Improves soil fertility', 'Cost-effective', 'Reduces chemical dependency'],
          applicationMethod: 'Mix with soil before planting',
          dosage: '500-1000 kg per acre'
        },
        {
          id: 'organic-manure',
          name: 'Organic Manure',
          description: 'Traditional organic manure for all crops',
          icon: 'bi-tree-fill',
          color: '#5ea332',
          image: 'assets/images/soil-conditioner/organic-manure.jpg',
          keyFeatures: ['Natural nutrition source', 'Improves soil texture', 'Long-lasting benefits', 'Environmentally safe'],
          applicationMethod: 'Apply before planting or as top dressing',
          dosage: '5-10 tons per acre'
        },
        {
          id: 'prom',
          name: 'Phosphate Rich Organic Manure (PROM)',
          description: 'Enriched with rock phosphate',
          icon: 'bi-gem',
          color: '#70bf3c',
          image: 'assets/images/soil-conditioner/prom.jpg',
          keyFeatures: ['High phosphorus content', 'Improves flowering', 'Enhances root development', 'Organic certification friendly'],
          applicationMethod: 'Mix with soil during planting',
          dosage: '200-400 kg per acre'
        }
      ],
      benefits: [
        'Improves soil structure',
        'Enhances aeration for better root growth',
        'Boosts water-holding capacity',
        'Reduces soil compaction',
        'Promotes beneficial microbial activity',
        'Increases nutrient availability and retention'
      ]
    },
    {
      id: 'biostimulants',
      title: 'Bio-Stimulants',
      subtitle: 'Natural Growth Enhancers',
      description: 'Natural substances that stimulate plant growth, improve stress tolerance, and enhance nutrient uptake.',
      icon: 'bi-brightness-high-fill',
      products: [
        {
          id: 'fish-amino',
          name: 'Fish Amino Acid',
          description: 'Organic protein hydrolysate for vigorous growth',
          icon: 'bi-droplet-half',
          color: '#2d5016',
          image: 'assets/images/biostimulants/fish-amino-acid.jpg',
          targetCrops: 'Suitable for all types of plants & crops',
          keyFeatures: [
            'Boosts vegetative growth',
            'Helps plants recover from stress',
            'Improves chlorophyll formation',
            'Supports flowering and fruiting',
            'Enhances soil fertility',
            'Promotes overall plant vigor and yield'
          ],
          applicationMethod: 'Foliar Spray: 2-5 ml per liter (early morning/evening) | Soil Drench: 5-10 ml per liter',
          dosage: 'Apply every 7-10 days during active growth'
        },
        {
          id: 'seaweed',
          name: 'Seaweed Extract',
          description: 'Marine-based growth stimulant',
          icon: 'bi-water',
          color: '#3d6b1f',
          image: 'assets/images/biostimulants/seaweed-extract.jpg',
          targetCrops: 'All crops, vegetables, fruits, ornamentals',
          keyFeatures: [
            'Rich in natural hormones',
            'Improves stress tolerance',
            'Enhances root development',
            'Boosts flowering and fruiting',
            'Increases nutrient uptake',
            'Improves crop quality'
          ],
          applicationMethod: 'Foliar Spray: 2-3 ml per liter | Soil application: 500-1000 ml per acre',
          dosage: 'Apply every 10-15 days'
        }
      ],
      benefits: [
        'Boosts vegetative growth',
        'Helps recovery from stress, pruning, or transplanting',
        'Improves chlorophyll formation',
        'Supports flowering and fruiting',
        'Enhances soil fertility',
        'Promotes overall plant vigor and yield'
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
        productTitle: 'Agro Waste Decomposer',
        imageUrl: 'assets/products/agro/Agro-Waste-Decomposer-1.jpg.jpeg'
      },
      {
        productTitle: 'Enriched Compost',
        imageUrl: 'assets/products/agro/Enriched-Compost-1.jpg.jpeg'
      },
      {
        productTitle: 'Fish Amino Acid',
        imageUrl: 'assets/products/agro/Fish-Amino-Acid-1.jpg.jpeg'
      },
      {
        productTitle: 'Seaweed Extract',
        imageUrl: 'assets/products/agro/Seaweed-Extract-1.jpg.jpeg'
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
