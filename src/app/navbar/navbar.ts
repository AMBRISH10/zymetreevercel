import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface MenuItem {
  label: string;
  link: string;
  hasDropdown?: boolean;
}

interface MegaMenuItem {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isMenuOpen = false;
  activeDropdown: string | null = null;

  menuItems: MenuItem[] = [
    { label: 'Home', link: '#home' },
    { label: 'About Us', link: '#about' }
  ];

  productsMenu: MenuItem[] = [
    { label: 'Speciality Chemicals', link: '/products/speciality-chemicals' },
    { label: 'BioCulture for Wastewater Treatment', link: '/products/bioculture' },
    { label: 'Homecare/Housekeeping', link: '/products/home-care-products' },
    { label: 'Personal Care', link: '/products/personal-care' },
    { label: 'AGRO', link: '/products/agro' },
    { label: 'Chemicals For Cleaning', link: '/products/chemicals-for-cleaning' }
  ];

  projectsMenu: MenuItem[] = [
    { label: 'Improve (Wetland Water Treatment)', link: '/projects/improve' },
    { label: 'Electrocoagulation for Wastewater Treatment', link: '/projects/electrocoagulation' },
    { label: 'MBR for STP & ETP', link: '/projects/mbr' },
    { label: 'Online Water Quality Monitoring System', link: '/projects/monitoring' }
  ];

  servicesMenu: MenuItem[] = [
    { label: 'Environment Management Consultancy', link: '/services/environment' },
    { label: 'Wastewater Treatment Consultancy', link: '/services/wastewater' },
    { label: 'Biofertilizer Production Consultancy', link: '/services/biofertilizer' },
    { label: 'Consultancy for Essential Oil Production', link: '/services/essential-oil' }
  ];

  catalogMenu: MenuItem[] = [
    { label: 'Product Catalog', link: '#product-catalog' },
    { label: 'Technical Documents', link: '#technical-docs' }
  ];

  productsMegaMenu: MegaMenuItem[] = [
    {
      image: 'assets/chemicals.jpg',
      // image: 'https://via.placeholder.com/400x300/059669/ffffff?text=Speciality+Chemicals',
      title: 'Speciality Chemicals',
      subtitle: 'Industrial Solutions',
      link: '/products/speciality-chemicals'
    },
    {
      image: 'assets/bioculture.webp',
      title: 'BioCulture',
      subtitle: 'Wastewater Treatment',
      link: '/products/bioculture'
    },
    {
      image: 'assets/agro.webp',
      title: 'AGRO Products',
      subtitle: 'Agricultural Solutions',
      link: '/products/agro'
    }
  ];

  projectsMegaMenu: MegaMenuItem[] = [
    {
      image: 'assets/wetland.jpg',
      title: 'Wetland Water Treatment',
      subtitle: 'Improve Project',
      link: '/projects/improve'
    },
    {
      image: 'assets/electro.webp',
      title: 'Electrocoagulation',
      subtitle: 'Advanced Treatment',
      link: '/projects/electrocoagulation'
    },
    {
      image: 'assets/MBR.jpg',
      title: 'MBR Systems',
      subtitle: 'STP & ETP Solutions',
      link: '/projects/mbr'
    }
  ];

  servicesMegaMenu: MegaMenuItem[] = [
    {
      image: 'assets/environmental.avif',
      title: 'Environment Management',
      subtitle: 'Expert Consultancy',
      link: '/services/environment'
    },
    {
      image: 'assets/wastewater.jpg',
      title: 'Wastewater Treatment',
      subtitle: 'Professional Consulting',
      link: '/services/wastewater'
    },
    {
      image: 'assets/biofertilizer.png',
      title: 'Biofertilizer Production',
      subtitle: 'Production Guidance',
      link: '/services/biofertilizer'
    }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(menu: string): void {
    if (this.activeDropdown === menu) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = menu;
    }
  }

  onDropdownMouseEnter(menu: string): void {
    this.activeDropdown = menu;
  }

  onDropdownMouseLeave(): void {
    this.activeDropdown = null;
  }

  isDropdownOpen(menu: string): boolean {
    return this.activeDropdown === menu;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.activeDropdown = null;
  }
}
