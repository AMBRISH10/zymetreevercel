import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Service {
  icon: string;
  title: string;
  delay: string;
}
@Component({
  selector: 'app-wastewater-treatment-consultancy',
  imports: [CommonModule],
  templateUrl: './wastewater-treatment-consultancy.html',
  styleUrl: './wastewater-treatment-consultancy.css',
})
export class WastewaterTreatmentConsultancy {
  services: Service[] = [
    {
      icon: 'bi-diagram-3',
      title: 'Design and Construction of STPs & ETPs',
      delay: '0.1s'
    },
    {
      icon: 'bi-clipboard-check',
      title: 'Auditing the existing systems and suggesting suitable changes',
      delay: '0.2s'
    },
    {
      icon: 'bi-people',
      title: 'Training to the staff and labors',
      delay: '0.3s'
    },
    {
      icon: 'bi-virus',
      title: 'Developing suitable bacterial consortium to the STPs & ETPs',
      delay: '0.4s'
    },
    {
      icon: 'bi-speedometer2',
      title: 'Optimizing the performance of STPs & ETPs',
      delay: '0.5s'
    },
    {
      icon: 'bi-shield-check',
      title: 'Compliance Audit and Permissions',
      delay: '0.6s'
    },
    {
      icon: 'bi-lightbulb',
      title: 'Novel sustainable solutions',
      delay: '0.7s'
    },
    {
      icon: 'bi-grid-3x3-gap',
      title: 'Innovative STP and ETP designs',
      delay: '0.8s'
    }
  ];

  hoveredIndex: number | null = null;

  onServiceHover(index: number): void {
    this.hoveredIndex = index;
  }

  onServiceLeave(): void {
    this.hoveredIndex = null;
  }
}
