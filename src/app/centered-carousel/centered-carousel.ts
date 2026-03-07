import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  thumbnail: string;
  full: string;
  alt: string;
}

@Component({
  selector: 'app-centered-carousel',
  imports: [CommonModule],
  templateUrl: './centered-carousel.html',
  styleUrl: './centered-carousel.css',
})
export class CenteredCarousel {
  row1Images: GalleryImage[] = [
    {
      thumbnail: 'assets/products/Handmade soap Coco & Coffee.png',
      full: 'assets/products/Handmade soap Coco & Coffee.png',
      alt: 'Product 1'
    },
    {
      thumbnail: 'assets/products/Handmade soap Shea Butter Soap.png',
      full: 'assets/products/Handmade soap Shea Butter Soap.png',
      alt: 'Product 2'
    },
    {
      thumbnail: 'assets/products/Floor Cleaner on Wood.png',
      full: 'assets/products/Floor Cleaner on Wood.png',
      alt: 'Product 3'
    },
    {
      thumbnail: 'assets/products/Brighter Detergents.png',
      full: 'assets/products/Brighter Detergents.png',
      alt: 'Product 4'
    },
    {
      thumbnail: 'assets/products/Floor Cleaner on Wood.png',
      full: 'assets/products/Floor Cleaner on Wood.png',
      alt: 'Product 5'
    },
    {
      thumbnail: 'assets/products/Dishwash Gel Dark Background.png',
      full: 'assets/products/Dishwash Gel Dark Background.png',
      alt: 'Product 6'
    }
  ];

  row2Images: GalleryImage[] = [
    {
      thumbnail: 'assets/products/ARAN - S Sulphur Solubilizing Bacteria (SSB) Front 1 L.jpg',
      full: 'assets/products/ARAN - S Sulphur Solubilizing Bacteria (SSB) Front 1 L.jpg',
      alt: 'Product 7'
    },
    {
      thumbnail: 'assets/products/Aran Bio enriched organic compost.jpeg',
      full: 'assets/products/Aran Bio enriched organic compost.jpeg',
      alt: 'Product 8'
    },
    {
      thumbnail: 'assets/products/Bio Enriched Organic Compost 5 Kg.jpg',
      full: 'assets/products/Bio Enriched Organic Compost 5 Kg.jpg',
      alt: 'Product 9'
    },
    {
      thumbnail: 'assets/products/Boiler  ZYMETREAT PM B01 pH Modifier.jpg',
      full: 'assets/products/Boiler  ZYMETREAT PM B01 pH Modifier.jpg',
      alt: 'Product 10'
    },
    {
      thumbnail: 'assets/products/ETP and STP Pouches.png',
      full: 'assets/products/ETP and STP Pouches.png',
      alt: 'Product 11'
    },
    {
      thumbnail: 'assets/products/ARAN - NPK NPK Consortia Front 5 L.jpeg',
      full: 'assets/products/ARAN - NPK NPK Consortia Front 5 L.jpeg',
      alt: 'Product 12'
    }
  ];

  allImages: GalleryImage[] = [...this.row1Images, ...this.row2Images];

  selectedImageIndex: number | null = null;
  isLightboxOpen = false;
  isRow1Paused = false;
  isRow2Paused = false;

  ngOnInit(): void {
    // Duplicate images for infinite scroll effect
    this.row1Images = [...this.row1Images, ...this.row1Images];
    this.row2Images = [...this.row2Images, ...this.row2Images];
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  openLightbox(image: GalleryImage): void {
    const index = this.allImages.findIndex(img => img.thumbnail === image.thumbnail);
    this.selectedImageIndex = index;
    this.isLightboxOpen = true;
  }

  closeLightbox(): void {
    this.isLightboxOpen = false;
    this.selectedImageIndex = null;
  }

  nextImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.allImages.length;
    }
  }

  previousImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex =
        (this.selectedImageIndex - 1 + this.allImages.length) % this.allImages.length;
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (!this.isLightboxOpen) return;

    switch (event.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
      case 'ArrowLeft':
        this.previousImage();
        break;
    }
  }

  pauseRow1(): void {
    this.isRow1Paused = true;
  }

  resumeRow1(): void {
    this.isRow1Paused = false;
  }

  pauseRow2(): void {
    this.isRow2Paused = true;
  }

  resumeRow2(): void {
    this.isRow2Paused = false;
  }
}
