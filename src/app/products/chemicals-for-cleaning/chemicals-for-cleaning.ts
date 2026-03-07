import { Component } from '@angular/core';
import { NotFound } from "../../not-found/not-found";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chemicals-for-cleaning',
  imports: [CommonModule],
  templateUrl: './chemicals-for-cleaning.html',
  styleUrl: './chemicals-for-cleaning.css',
})
export class ChemicalsForCleaning {
  selectedImage: string | null = null;

  products = [
    {
      name: 'Caustic Soda Flakes',
      image: 'assets/products/Raw material/Caustic Soda Flakes.jpg'
    },
    {
      name: 'Citric Acid',
      image: 'assets/products/Raw material/Citric Acid.jpg'
    },
    {
      name: 'Dolamaite',
      image: 'assets/products/Raw material/Dolamaite.jpg'
    },
    {
      name: 'Fragrance bottle',
      image: 'assets/products/Raw material/Fragrance bottle.jpg'
    },
    {
      name: 'Glycerin',
      image: 'assets/products/Raw material/Glycerin.jpg'
    },
    {
      name: 'Hydrochloric Acid',
      image: 'assets/products/Raw material/Hydrochloric acid.jpg'
    },
    {
      name: 'SLES Paste',
      image: 'assets/products/Raw material/SLES Paste.jpg'
    },
    {
      name: 'Slurry',
      image: 'assets/products/Raw material/Slurry.jpg'
    },
    {
      name: 'Sodium Bicarbonate',
      image: 'assets/products/Raw material/Sodium Bicarbonate.jpg'
    },
    {
      name: 'Sodium Carbonate',
      image: 'assets/products/Raw material/Sodium Carbonate.jpg'
    },
    {
      name: 'Sodium Hypochloride',
      image: 'assets/products/Raw material/Sodium Hypochloride.jpg'
    },
    {
      name: 'Thickener',
      image: 'assets/products/Raw material/Thickener.jpg'
    }
  ];

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

}
