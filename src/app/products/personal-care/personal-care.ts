import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  labelText: string;
}
@Component({
  selector: 'app-personal-care',
  imports: [CommonModule],
  templateUrl: './personal-care.html',
  styleUrl: './personal-care.css',
})
export class PersonalCare {

  selectedCards: any[] = [];

  // cardItems: CardData[] = [
  //   {
  //     title: 'Handmade Soaps',
  //     description: 'Made in small batches to ensure purity and quality, our soaps are free from harsh chemicals, synthetic fragrances, and artificial preservatives. Choose your preferred fragrance blend, skin-type formulation, and design to create a bar that truly matches your personal style.',
  //     imageUrl: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  //     labelText: 'Design'
  //   },
  //   {
  //     title: 'Code',
  //     description: 'Code review (sometimes referred to as peer review) is a software quality assurance activity in which one or several people check a program mainly by viewing and reading parts of its source code, and they do so after implementation or as an interruption of implementation.',
  //     imageUrl: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //     labelText: 'Code'
  //   },
  //   // {
  //   //   title: 'Launch',
  //   //   description: 'A software release life cycle is the sum of the stages of development and maturity for a piece of computer software. Cycles range from its initial development to its eventual release, and include updated versions of the released version to help improve software or fix software bugs still present in the software.',
  //   //   imageUrl: 'https://images.pexels.com/photos/355906/pexels-photo-355906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   //   labelText: 'Launch'
  //   // },
  //   // {
  //   //   title: 'Earn',
  //   //   description: 'You earn money when you trade your time and energy for money. I earn my money by working in construction.',
  //   //   imageUrl: 'https://images.pexels.com/photos/928181/pexels-photo-928181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   //   labelText: 'Earn'
  //   // }
  // ];

  onReadMoreClick(title: string): void {
    console.log(`Read more clicked for: ${title}`);
    // Add your navigation or action logic here
  }


  title: string = "Premium Wellness Essentials";
  description: string = "Zymeetree offers premium wellness essentials crafted with purity and care, including Customized Cold Processed Handmade Soaps made from natural plant oils and nourishing butters, designed to gently cleanse and hydrate the skin without harsh chemicals, and 100% Cotton Eco-Friendly Sanitary Napkins that provide breathable, biodegradable, and irritation-free protection for comfortable and sustainable menstrual hygiene.";

  onReadMore(): void {
    console.log('Read more clicked');
    // Add your navigation or modal logic here
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////

  product = {
    brand: 'SONY',
    name: 'SONY ALPHA A7 KIT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque consequatur corporis vitae nobis, ut veniam earum expedita eaque at placeat perferendis unde voluptates explicabo rerum distinctio quis, illo, porro et?',
    originalPrice: 1800.00,
    discountedPrice: 1500.00,
    rating: 8,
    maxRating: 10,
    shipping: 'FREE SHIPPING',
    imageUrl: 'assets/zymee-personalcare.png'
  };

  get filledStars(): number[] {
    return Array(this.product.rating).fill(0);
  }

  get emptyStars(): number[] {
    return Array(this.product.maxRating - this.product.rating).fill(0);
  }

  onAddToCart(): void {
    console.log('Product added to cart:', this.product.name);
    // Add your cart logic here
  }

  onLoginForMore(): void {
    console.log('Login button clicked');
    // Add your login logic here
  }

  showBelowCards(type: string) {
  if (type === 'soap') {
    this.selectedCards = [
      {
        title: 'Herbal Soap',
        desc: 'Made with neem, tulsi and essential oils.',
        image: 'https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg'
      },
      {
        title: 'Charcoal Soap',
        desc: 'Deep cleansing activated charcoal soap.',
        image: 'https://images.pexels.com/photos/6621334/pexels-photo-6621334.jpeg'
      }
    ];
  }

  if (type === 'code') {
    this.selectedCards = [
      {
        title: 'Code Review',
        desc: 'Improve readability and maintainability.',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Best Practices',
        desc: 'Follow clean architecture and standards.',
        image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg'
      }
    ];
  }
}
}
