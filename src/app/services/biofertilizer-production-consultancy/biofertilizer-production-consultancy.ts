import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface KeyFeature {
  icon: string;
  title: string;
  description: string;
  delay: string;
}
@Component({
  selector: 'app-biofertilizer-production-consultancy',
  imports: [CommonModule],
  templateUrl: './biofertilizer-production-consultancy.html',
  styleUrl: './biofertilizer-production-consultancy.css',
})
export class BiofertilizerProductionConsultancy {
  keyFeatures: KeyFeature[] = [
    {
      icon: 'bi-egg',
      title: 'Microbial Strain Selection',
      description: 'Expert guidance in selecting suitable microbial strains for optimal biofertilizer production',
      delay: '0.1s'
    },
    {
      icon: 'bi-truck',
      title: 'Raw Material Sourcing',
      description: 'Support in identifying and sourcing quality raw materials for production',
      delay: '0.2s'
    },
    {
      icon: 'bi-gear-wide-connected',
      title: 'Production Methods',
      description: 'Comprehensive guidance on solid and liquid biofertilizer production techniques',
      delay: '0.3s'
    },
    {
      icon: 'bi-graph-up',
      title: 'Quality Control',
      description: 'Implementation of robust quality control protocols and shelf-life enhancement strategies',
      delay: '0.4s'
    },
    {
      icon: 'bi-shield-check',
      title: 'Regulatory Compliance',
      description: 'Expert support for licensing, certification, and meeting agricultural standards',
      delay: '0.5s'
    },
    {
      icon: 'bi-cash-coin',
      title: 'Business Advisory',
      description: 'Cost estimation, pricing strategies, and market entry planning for commercial success',
      delay: '0.6s'
    }
  ];

  hoveredIndex: number | null = null;

  onFeatureHover(index: number): void {
    this.hoveredIndex = index;
  }

  onFeatureLeave(): void {
    this.hoveredIndex = null;
  }
}
