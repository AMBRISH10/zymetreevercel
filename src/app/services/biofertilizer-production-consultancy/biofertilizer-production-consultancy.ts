import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NitrogenProduct {
  name: string;
  crops: string;
  features: string;
  application: string;
  dosage: string;
}

interface OtherBioFertilizer {
  name: string;
  description: string;
  crops: string;
  features: string;
  application: string;
  dosage: string;
}

interface MicroNutrient {
  name: string;
  description: string;
  crops: string;
  features: string;
  application: string;
  dosage: string;
}

interface BiocontrolAgent {
  name: string;
  target: string;
  mechanism: string;
}
@Component({
  selector: 'app-biofertilizer-production-consultancy',
  imports: [CommonModule],
  templateUrl: './biofertilizer-production-consultancy.html',
  styleUrl: './biofertilizer-production-consultancy.css',
})
export class BiofertilizerProductionConsultancy {
  activeSection: 'home' | 'biofertilizer' | 'biocontrol' | 'soil' | 'biostimulant' = 'home';
  mobileMenuOpen = false;
  expandedProduct: number | null = null;

  nitrogenProducts: NitrogenProduct[] = [
    {
      name: 'Azospirillum',
      crops: 'Cereals, Millets, Sugarcane, Cotton, Vegetables',
      features: 'Fixes atmospheric nitrogen, Produces growth hormones, Improves root development',
      application: 'Seed treatment, Seedling dip, Soil application',
      dosage: '2-4 L/ha or 500ml per acre'
    },
    {
      name: 'Rhizobium',
      crops: 'Legumes (Pulses, Groundnut, Soybean)',
      features: 'Forms root nodules, Fixes N2 from atmosphere, Specific to legume crops',
      application: 'Seed treatment before sowing',
      dosage: '200-250g per 10kg seeds'
    },
    {
      name: 'Acetobacter',
      crops: 'Sugarcane, Rice, Cotton',
      features: 'Fixes atmospheric nitrogen, Produces organic acids, Tolerates acidic conditions',
      application: 'Soil application, Seed treatment',
      dosage: '2-4 L/ha'
    },
    {
      name: 'Azotobacter',
      crops: 'Vegetables, Cereals, Cotton, Oilseeds',
      features: 'Free-living nitrogen fixer, Produces vitamins and growth substances',
      application: 'Seed treatment, Soil application',
      dosage: '2-4 L/ha'
    }
  ];

  otherBioFertilizers: OtherBioFertilizer[] = [
    {
      name: 'Phosphorous Solubilizing Bacteria (PSB)',
      description: 'Converts insoluble phosphorus into plant-available forms',
      crops: 'All crops - especially cereals, pulses, oilseeds',
      features: 'Solubilizes rock phosphate, Reduces P fertilizer need by 25-30%, Enhances root growth',
      application: 'Seed treatment, Soil application, Seedling root dip',
      dosage: '2-4 L/ha'
    },
    {
      name: 'Potassium Mobilizing Bacteria (KMB)',
      description: 'Releases fixed potassium from soil minerals',
      crops: 'Fruits, Vegetables, Sugarcane, Cotton',
      features: 'Mobilizes K from soil reserves, Improves fruit quality, Enhances disease resistance',
      application: 'Soil application, Drip irrigation',
      dosage: '2-4 L/ha'
    },
    {
      name: 'Mycorrhizal Biofertilizer (VAM)',
      description: 'Beneficial fungi forming symbiotic root associations',
      crops: 'Horticulture, Plantation crops, Vegetables',
      features: 'Increases nutrient absorption area, Improves drought tolerance, Protects against soil pathogens',
      application: 'Soil application at planting, Seedling treatment',
      dosage: '4-5 kg/ha'
    },
    {
      name: 'NPK Consortia',
      description: 'Combined culture of N-fixing, P-solubilizing and K-mobilizing bacteria',
      crops: 'All crops',
      features: 'Complete nutrient solution, Reduces chemical fertilizer by 25-30%, Cost-effective',
      application: 'Seed treatment, Soil application',
      dosage: '2-4 L/ha'
    }
  ];

  microNutrients: MicroNutrient[] = [
    {
      name: 'Zinc Solubilizing Bacteria (ZnSB)',
      description: 'Converts unavailable zinc into plant-absorbable forms',
      crops: 'Rice, Wheat, Maize, Pulses, Vegetables',
      features: 'Enhances Zn availability, Improves enzyme activity, Boosts immunity',
      application: 'Soil application, Seed treatment',
      dosage: '2 L/ha'
    },
    {
      name: 'Silica Solubilizing Bacteria (SiSB)',
      description: 'Mobilizes silica for stronger plant structure',
      crops: 'Rice, Sugarcane, Banana, All crops',
      features: 'Strengthens cell walls, Improves pest resistance, Enhances photosynthesis',
      application: 'Soil application',
      dosage: '2 L/ha'
    },
    {
      name: 'Sulphur Solubilizing Bacteria (SSB)',
      description: 'Oxidizes elemental sulphur to plant-available sulphate',
      crops: 'Oilseeds, Pulses, Vegetables, All crops',
      features: 'Improves oil/protein content, Enhances nutrient uptake, Better crop quality',
      application: 'Soil application',
      dosage: '2 L/ha'
    }
  ];

  biocontrolAgents: BiocontrolAgent[] = [
    {
      name: 'Trichoderma viride',
      target: 'Soil-borne fungal diseases',
      mechanism: 'Mycoparasitism, antibiosis'
    },
    {
      name: 'Pseudomonas fluorescens',
      target: 'Root rot, wilt diseases',
      mechanism: 'Produces antibiotics, induces systemic resistance'
    },
    {
      name: 'Bacillus subtilis',
      target: 'Fungal & bacterial diseases',
      mechanism: 'Produces lipopeptides, forms biofilms'
    },
    {
      name: 'Beauveria bassiana',
      target: 'Insect pests (whitefly, aphids)',
      mechanism: 'Entomopathogenic fungus'
    }
  ];

  setActiveSection(section: 'home' | 'biofertilizer' | 'biocontrol' | 'soil' | 'biostimulant'): void {
    this.activeSection = section;
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleProduct(idx: number): void {
    this.expandedProduct = this.expandedProduct === idx ? null : idx;
  }
}
