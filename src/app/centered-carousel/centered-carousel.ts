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
      thumbnail: 'assets/products/aloevera_soap.jpeg',
      full: 'assets/products/aloevera_soap.jpeg',
      alt: 'Product 1'
    },
    {
      thumbnail: 'assets/products/Dishwashgel_all-300x260.jpg',
      full: 'assets/products/Dishwashgel_all-300x260.jpg',
      alt: 'Product 2'
    },
    {
      thumbnail: 'assets/products/orange_soap.jpeg',
      full: 'assets/products/orange_soap.jpeg',
      alt: 'Product 3'
    },
    {
      thumbnail: 'assets/products/Phenyl-compound_1L-225x300.jpeg',
      full: 'assets/products/Phenyl-compound_1L-225x300.jpeg',
      alt: 'Product 4'
    },
    {
      thumbnail: 'assets/products/Floor-cleaner_Neem_500mL-273x300.jpg',
      full: 'assets/products/Floor-cleaner_Neem_500mL-273x300.jpg',
      alt: 'Product 5'
    },
    {
      thumbnail: 'assets/products/coffee_soap.jpeg',
      full: 'assets/products/coffee_soap.jpeg',
      alt: 'Product 6'
    }
  ];

  row2Images: GalleryImage[] = [
    {
      thumbnail: 'assets/products/coal_soap.jpeg',
      full: 'assets/products/coal_soap.jpeg',
      alt: 'Product 7'
    },
    {
      thumbnail: 'assets/products/Detergent-powder-2-Kg-219x300.jpg',
      full: 'assets/products/Detergent-powder-2-Kg-219x300.jpg',
      alt: 'Product 8'
    },
    {
      thumbnail: 'assets/products/KIT-PRO-Kitchen-Oil-Grease-Remover-225x300.jpeg',
      full: 'assets/products/KIT-PRO-Kitchen-Oil-Grease-Remover-225x300.jpeg',
      alt: 'Product 9'
    },
    {
      thumbnail: 'assets/products/neem_soap.jpeg',
      full: 'assets/products/neem_soap.jpeg',
      alt: 'Product 10'
    },
    {
      thumbnail: 'assets/products/Room freshener_all.png',
      full: 'assets/products/Room freshener_all.png',
      alt: 'Product 11'
    },
    {
      thumbnail: 'assets/products/Floor-cleaner_Lemon_5L-229x300.jpg',
      full: 'assets/products/Floor-cleaner_Lemon_5L-229x300.jpg',
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
