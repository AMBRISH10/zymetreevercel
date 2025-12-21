import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Product {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  applications: string[];
  composition: string;
  dosage: string;
  image: string;
}
@Component({
  selector: 'app-agro',
  imports: [CommonModule],
  templateUrl: './agro.html',
  styleUrl: './agro.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.5s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px) scale(0.9)' }),
        animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ opacity: 0, transform: 'translateY(30px) scale(0.95)' }))
      ])
    ])
  ]
})
export class Agro {
  products: Product[] = [
    {
      id: 1,
      name: 'Seaweed Extract',
      description: 'Natural marine bio-stimulant for enhanced plant growth',
      detailedDescription: 'Our premium Seaweed Extract is derived from sustainably harvested marine algae, rich in natural growth hormones, vitamins, and trace minerals. This powerful bio-stimulant enhances plant vigor, stress tolerance, and overall crop productivity through its unique blend of cytokinins, auxins, and betaines.',
      benefits: [
        'Enhances root development and nutrient uptake',
        'Improves stress tolerance against drought and temperature extremes',
        'Increases yield and crop quality significantly',
        'Rich in natural plant hormones and micronutrients',
        'Promotes faster seed germination and establishment'
      ],
      applications: [
        'Foliar spray for all crops including vegetables, fruits, and cereals',
        'Soil application for improved microbial activity',
        'Seed treatment for better germination rates',
        'Compatible with most fertilizers and pesticides'
      ],
      composition: 'Natural seaweed concentrate (Ascophyllum nodosum) - 25%, Alginic acid - 18%, Mannitol - 5%, Amino acids - 3%, Natural plant hormones, Trace minerals (Fe, Zn, Mn, Cu, B)',
      dosage: '2-3 ml per liter of water for foliar spray. Apply every 15-20 days during crop growth stages. For soil application: 5-7 liters per acre.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
    },
    {
      id: 2,
      name: 'Fish Amino Acid',
      description: 'Organic protein-rich fertilizer for vigorous growth',
      detailedDescription: 'Fish Amino Acid is a premium organic fertilizer produced through enzymatic hydrolysis of marine fish waste. This nutrient-rich formulation provides readily available amino acids, peptides, and proteins that are quickly absorbed by plants, promoting rapid growth and enhanced metabolic processes.',
      benefits: [
        'Provides 18 essential amino acids for plant metabolism',
        'Improves photosynthesis and chlorophyll production',
        'Enhances flowering and fruit setting',
        'Boosts plant immunity against diseases',
        'Completely organic and eco-friendly'
      ],
      applications: [
        'Suitable for all crops - vegetables, fruits, flowers, and field crops',
        'Foliar application during vegetative and reproductive stages',
        'Drip irrigation compatible',
        'Excellent for organic farming practices'
      ],
      composition: 'Fish protein hydrolysate - 30%, Free amino acids - 15%, Organic nitrogen - 8%, Phosphorus - 2%, Potassium - 1%, Organic carbon - 12%',
      dosage: '3-5 ml per liter for foliar spray. Apply bi-weekly for best results. For fertigation: 2-3 liters per acre.',
      image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400'
    },
    {
      id: 3,
      name: 'Agro Waste Decomposer',
      description: 'Rapid composting solution for agricultural residues',
      detailedDescription: 'Our Agro Waste Decomposer is a specialized microbial consortium designed to accelerate the decomposition of crop residues, farmyard manure, and organic waste. This bio-formulation contains carefully selected beneficial microorganisms that break down complex organic matter into nutrient-rich compost within 45-60 days.',
      benefits: [
        'Reduces composting time by 50-60%',
        'Converts farm waste into valuable organic manure',
        'Eliminates foul odors during decomposition',
        'Enriches compost with beneficial microorganisms',
        'Reduces greenhouse gas emissions from waste burning'
      ],
      applications: [
        'Composting of crop residues (wheat straw, rice stubble, cotton stalks)',
        'Treatment of farmyard manure and cattle dung',
        'Vermicomposting enhancement',
        'Municipal organic waste management'
      ],
      composition: 'Trichoderma viride - 1×10⁸ CFU/g, Bacillus subtilis - 1×10⁸ CFU/g, Pseudomonas fluorescens - 1×10⁷ CFU/g, Cellulolytic enzymes, Lignolytic enzymes, Organic carrier',
      dosage: '1 kg decomposer per ton of organic waste. Mix with water and spray uniformly. Maintain 60-70% moisture and turn the pile every 7-10 days.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400'
    },
    {
      id: 4,
      name: 'Enriched Compost',
      description: 'Premium quality nutrient-rich organic compost',
      detailedDescription: 'Enriched Compost is a scientifically processed organic fertilizer made from carefully selected agricultural waste, farmyard manure, and beneficial microbial cultures. Through controlled composting and bio-enrichment, we produce a superior quality organic manure that provides balanced nutrition and improves soil health.',
      benefits: [
        'Provides slow-release nutrients for sustained plant growth',
        'Improves soil structure and water retention capacity',
        'Enhances beneficial soil microbial population',
        'Increases organic carbon content in soil',
        'Reduces dependency on chemical fertilizers by 30-40%'
      ],
      applications: [
        'Base application for all crops before sowing/planting',
        'Top dressing during crop growth stages',
        'Ideal for organic farming and kitchen gardens',
        'Suitable for potted plants and landscaping'
      ],
      composition: 'Organic carbon - 20%, Organic nitrogen - 1.5%, Phosphorus (P₂O₅) - 1.0%, Potassium (K₂O) - 1.2%, Beneficial microbes - 1×10⁶ CFU/g, pH: 6.5-7.5, Moisture: 15-20%',
      dosage: '5-8 tons per acre for field crops. Mix 200-300 grams per pot for potted plants. Apply before sowing and supplement mid-season.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400'
    },
    {
      id: 5,
      name: 'Biofertilizer',
      description: 'Living microbial inoculants for sustainable nutrition',
      detailedDescription: 'Our advanced Biofertilizer is a consortium of beneficial soil microorganisms that fix atmospheric nitrogen, solubilize phosphorus, and mobilize potassium. These living microbes establish symbiotic relationships with plant roots, enhancing nutrient availability and promoting healthy plant growth while reducing chemical fertilizer requirements.',
      benefits: [
        'Fixes atmospheric nitrogen up to 20-30 kg per acre',
        'Solubilizes unavailable soil phosphorus',
        'Mobilizes potassium and micronutrients',
        'Produces plant growth-promoting substances',
        'Improves soil fertility and microbial diversity'
      ],
      applications: [
        'Seed treatment before sowing',
        'Seedling root dip for transplanted crops',
        'Soil application with irrigation',
        'Compatible with organic farming systems'
      ],
      composition: 'Azotobacter - 1×10⁸ CFU/g (nitrogen fixation), Phosphate Solubilizing Bacteria - 1×10⁸ CFU/g, Potassium Mobilizing Bacteria - 1×10⁷ CFU/g, Mycorrhizal fungi - 100 IP/g, Organic carrier base',
      dosage: '4-5 kg per acre for soil application. For seed treatment: 10 grams per kg of seeds. Mix with water and apply during evening hours.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400'
    }
  ];

  selectedProduct: Product | null = null;

  ngOnInit(): void {
    // Component initialization
  }

  openDialog(product: Product): void {
    this.selectedProduct = product;
    document.body.style.overflow = 'hidden';
  }

  closeDialog(): void {
    this.selectedProduct = null;
    document.body.style.overflow = 'auto';
  }
}
