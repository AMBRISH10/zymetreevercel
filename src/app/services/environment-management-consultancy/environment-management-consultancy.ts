import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Service {
  icon: string;
  title: string;
  delay: string;
}
@Component({
  selector: 'app-environment-management-consultancy',
  imports: [CommonModule],
  templateUrl: './environment-management-consultancy.html',
  styleUrl: './environment-management-consultancy.css',
})
export class EnvironmentManagementConsultancy {
  services: Service[] = [
    {
      icon: 'bi-recycle',
      title: 'Environmental Management Plans for various kinds of wastes generated',
      delay: '0.1s'
    },
    {
      icon: 'bi-clipboard-data',
      title: 'Environmental Impact Assessment Guidance',
      delay: '0.2s'
    },
    {
      icon: 'bi-search',
      title: 'Environmental Audits and Consultation to improved management',
      delay: '0.3s'
    },
    {
      icon: 'bi-bullseye',
      title: 'SDG Audit related to Environmental Management Goals',
      delay: '0.4s'
    },
    {
      icon: 'bi-gear',
      title: 'Waste Management System Design',
      delay: '0.5s'
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'Auditing the existing system and suggesting improvements',
      delay: '0.6s'
    },
    {
      icon: 'bi-person-workspace',
      title: 'Environmental Management Training to staff and labors',
      delay: '0.7s'
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
