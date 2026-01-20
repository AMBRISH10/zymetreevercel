import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
interface Product {
  name: string;
  image: string;
}

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  products: Product[];
  icon: string;
}
@Component({
  selector: 'app-home-care-products',
  imports: [CommonModule],
  templateUrl: './home-care-products.html',
  styleUrl: './home-care-products.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        )
      ])
    ])
  ]
})
export class HomeCareProducts {
  selectedImage: string = '';
  showModal: boolean = false;
  activeCategory: string = '';

  categories: ProductCategory[] = [
    {
      id: 'kitchen',
      title: 'Kitchen Care',
      description: 'At Zymetree, our Kitchen Care solutions are designed to meet the highest standards of hygiene, safety and economical for both domestic and commercial environments. Formulated with advanced degreasing and antimicrobial agents, our products effectively remove tough grease, food residues, spills and surface contaminants while protecting kitchen surfaces and equipment. From utensils and countertops to stoves and exhaust areas, Zymetree Kitchen Care products support streamlined cleaning operations, improved hygiene control, and long-term maintenance of kitchen environments. Trusted by households, restaurants, hotels, and industrial kitchens, we remain committed to delivering reliable cleaning solutions that enhance productivity, safety, and overall kitchen efficiency',
      icon: 'bi-cup-hot',
      products: [
        { name: 'Kitchen Cleaner 1', image: 'assets/images/kitchen/image1.jpeg' },
        { name: 'Kitchen Cleaner 2', image: 'assets/images/kitchen/image2.jpeg' },
        { name: 'Kitchen Cleaner 3', image: 'assets/images/kitchen/image3.jpeg' },
        { name: 'Kitchen Cleaner 4', image: 'assets/images/kitchen/image4.jpeg' },
        { name: 'Kitchen Cleaner 5', image: 'assets/images/kitchen/image5.jpeg' }
      ]
    },
    {
      id: 'fabric',
      title: 'Fabric Care',
      description: 'Zymetree offers Fabric Care solutions developed to deliver exceptional cleaning performance while preserving the quality and lifespan of every fabric. Formulated with advanced surfactants, brightening agents and fabric-safe conditioners, our products effectively remove dirt, stains and odors without causing fading, shrinkage or fiber damage. Whether for households, laundromats, hospitality or industrial laundry units, Zymetree Fabric Care products ensure consistent wash results, enhanced softness and long-lasting freshness. Designed for operational efficiency, our formulations reduce rewash rates, improve machine performance and optimize detergent usage—resulting in significant cost savings and improved workflow.  We also offer customized solutions for various fabric cleaning related problem.',
      icon: 'bi-stars',
      products: [
        { name: 'Fabric Cleaner 1', image: 'assets/images/fabric/image6.jpeg' },
        { name: 'Fabric Cleaner 2', image: 'assets/images/fabric/image7.png' },
        { name: 'Fabric Cleaner 3', image: 'assets/images/fabric/image8.jpeg' },
        { name: 'Fabric Cleaner 4', image: 'assets/images/fabric/image9.jpeg' },
        { name: 'Fabric Cleaner 5', image: 'assets/images/fabric/image10.jpeg' },
        { name: 'Fabric Cleaner 6', image: 'assets/images/fabric/image11.jpeg' },
        { name: 'Fabric Cleaner 7', image: 'assets/images/fabric/image12.jpeg' },
        { name: 'Fabric Cleaner 8', image: 'assets/images/fabric/image13.jpeg' },
        { name: 'Fabric Cleaner 9', image: 'assets/images/fabric/image14.jpeg' },
        { name: 'Fabric Cleaner 10', image: 'assets/images/fabric/image15.png' },
        { name: 'Fabric Cleaner 11', image: 'assets/images/fabric/image16.png' }
      ]
    },
    {
      id: 'bathroom',
      title: 'Bathroom Care',
      description: 'At Zymetree, our Bathroom Tiles & Toilet Care solutions are formulated to ensure superior hygiene, long-lasting cleanliness, and effective protection across all sanitary environments. Developed with advanced descaling, disinfecting and stain-removal agents, our products efficiently eliminate hard water deposits, soap scum, mineral buildup, and microbial contaminants—restoring surfaces to their original shine. Each formulation is engineered to be surface-safe, ensuring compatibility with ceramic, porcelain, vitrified tiles, stainless steel fixtures, and modern sanitaryware.Designed for both domestic and institutional use, Zymetree Bathroom & Toilet Care products support high hygiene standards, reduced cleaning time, and improved maintenance efficiency. Trusted by households, hotels, industries, and facility management teams, our solutions deliver consistent, reliable performance that enhances sanitation, safety, and overall washroom experience. At Zymetree, we remain committed to providing high-quality cleaning solutions that promote healthier spaces and professional-grade cleanliness.',
      icon: 'bi-droplet',
      products: [
        { name: 'Bathroom Cleaner 1', image: 'assets/images/bathroom/image17.jpg' },
        { name: 'Bathroom Cleaner 2', image: 'assets/images/bathroom/image18.jpeg' },
        { name: 'Bathroom Cleaner 3', image: 'assets/images/bathroom/image19.jpeg' },
        { name: 'Bathroom Cleaner 4', image: 'assets/images/bathroom/image20.jpeg' },
        { name: 'Bathroom Cleaner 5', image: 'assets/images/bathroom/image21.jpeg' },
        { name: 'Bathroom Cleaner 6', image: 'assets/images/bathroom/image22.jpeg' },
        { name: 'Bathroom Cleaner 7', image: 'assets/images/bathroom/image23.jpeg' },
        { name: 'Bathroom Cleaner 8', image: 'assets/images/bathroom/image24.jpeg' }
      ]
    },
    {
      id: 'floor',
      title: 'Floor Care',
      description: 'Our Floor Care solutions are engineered to deliver superior cleanliness, long-lasting shine, and enhanced surface protection for both residential and commercial environments. Developed with high-performance cleaning agents, our formulations effectively remove dirt, stains, grease, and microbial deposits without damaging flooring materials. Whether it is tile, marble, granite, concrete, vinyl, or industrial flooring, our products ensure consistent results with minimal effort. Designed for operational efficiency, Zymetree Floor Care solutions support faster cleaning cycles, improved hygiene standards, and reduced maintenance costs. Trusted by households, corporate offices, industries, and facility management teams, our products uphold the highest levels of quality, safety, and performance—ensuring every floor remains clean, polished, and professionally maintained.',
      icon: 'bi-grid-3x3',
      products: [
        { name: 'Floor Cleaner 1', image: 'assets/images/floor/image25.jpeg' },
        { name: 'Floor Cleaner 2', image: 'assets/images/floor/image26.jpeg' },
        { name: 'Floor Cleaner 3', image: 'assets/images/floor/image27.jpeg' },
        { name: 'Floor Cleaner 4', image: 'assets/images/floor/image28.jpeg' }
      ]
    },
    {
      id: 'glass',
      title: 'Glass Care',
      description: 'Our Glass Cleaner is a high-performance formulation designed to remove dirt, dust, grease, fingerprints, and water marks from glass and shiny surfaces. It delivers a fast-drying, streak-free finish, leaving surfaces sparkling clean and transparent.',
      icon: 'bi-square',
      products: [
        { name: 'Glass Cleaner 1', image: 'assets/images/glass/image29.jpeg' },
        { name: 'Glass Cleaner 2', image: 'assets/images/glass/image30.jpg' }
      ]
    },
    {
      id: 'auto',
      title: 'Auto Care',
      description: 'At Zymetree, our Auto Care range is engineered to deliver high-performance cleaning, superior surface protection, and a premium finish for all types of vehicles. Developed with advanced automotive-grade formulations, our products ensure effective removal of dirt, grime, grease, and road contaminants while safeguarding the paint, rubber, glass, and interior surfaces. Our comprehensive range—including Automobile Shampoo, Tyre Polish, Glass Cleaner and Air Freshener—supports both aesthetic enhancement and long-term maintenance.Zymetree Auto Care solutions are trusted by automotive service centers, car detailing professionals, fleet operators, and individual vehicle owners for their consistent results and operational efficiency. Each product is designed for ease of use, faster cleaning cycles, and durable shine, ensuring vehicles remain well-maintained, hygienic, and visually appealing. With a commitment to quality and innovation, Zymetree continues to deliver reliable auto care solutions that elevate vehicle care standards and enhance customer satisfaction.',
      icon: 'bi-car-front',
      products: [
        { name: 'Auto Care 1', image: 'assets/images/auto/image31.jpeg' },
        { name: 'Auto Care 2', image: 'assets/images/auto/image32.jpeg' },
        { name: 'Auto Care 3', image: 'assets/images/auto/image33.jpeg' },
        { name: 'Auto Care 4', image: 'assets/images/auto/image34.jpg' },
        { name: 'Auto Care 5', image: 'assets/images/auto/image35.jpeg' },
        { name: 'Auto Care 6', image: 'assets/images/auto/image36.jpeg' },
        { name: 'Auto Care 7', image: 'assets/images/auto/image37.jpeg' },
        { name: 'Auto Care 8', image: 'assets/images/auto/image38.jpeg' }
      ]
    },
    {
      id: 'disinfectant',
      title: 'Disinfectant Liquids',
      description: 'At Zymetree, our Disinfectant range is developed to deliver advanced protection, superior hygiene, and reliable germ elimination across diverse environments. Formulated with high-efficacy antimicrobial agents, our disinfectants effectively eliminate bacteria, viruses, fungi, and odor-causing microbes—ensuring safer and sanitized spaces. Designed for use in households, commercial establishments, healthcare environments, industries, and public facilities, Zymetree Disinfectant solutions provide fast action, long-lasting hygiene, and surface safety.Each formulation is engineered for consistent performance on high-touch surfaces, floors, equipment, and washrooms without causing corrosion or surface damage. Trusted for quality, safety, and compliance, Zymetree continues to support modern cleaning and sanitation standards with products that enhance health protection, reduce infection risks, and maintain a clean, hygienic environment. Our commitment is to deliver dependable disinfectant solutions that safeguard people, property, and everyday spaces.',
      icon: 'bi-shield-check',
      products: [
        { name: 'Disinfectant 1', image: 'assets/images/disinfectant/image39.jpg' },
        { name: 'Disinfectant 2', image: 'assets/images/disinfectant/image40.jpeg' },
        { name: 'Disinfectant 3', image: 'assets/images/disinfectant/image41.jpeg' },
        { name: 'Disinfectant 4', image: 'assets/images/disinfectant/image42.jpeg' },
        { name: 'Disinfectant 5', image: 'assets/images/disinfectant/image43.jpeg' },
        { name: 'Disinfectant 6', image: 'assets/images/disinfectant/image44.png' },
        { name: 'Disinfectant 7', image: 'assets/images/disinfectant/image45.jpeg' },
        { name: 'Disinfectant 8', image: 'assets/images/disinfectant/image46.jpeg' }
      ]
    },
    {
      id: 'others',
      title: 'Other Products',
      description: 'We also manufacture customised cleaning liquids tailored to meet the unique operational needs of various industries. Our advanced formulations are developed to address specific cleaning challenges across manufacturing units, institutions, commercial facilities, and specialized service environments. Whether it is high-foam, low-foam, neutral pH, degreasing, descaling, or application-specific solutions, Zymetree ensures precision, performance, and consistency in every customized product.Our expert R&D team works closely with clients to create solutions that enhance cleaning efficiency, support safety standards, and comply with industry requirements. Each formulation is tested for quality, stability, and effectiveness, ensuring optimum results on diverse surfaces and equipment. From bulk supply to specialized blends, Zymetree remains a trusted partner for custom cleaning solutions that improve productivity, reduce downtime, and deliver long-term value.With a strong commitment to innovation and reliability, Zymetree continues to provide tailored cleaning liquids that match the exact needs of modern industries.',
      icon: 'bi-boxes',
      products: [
        { name: 'Multipurpose 1', image: 'assets/images/others/image47.jpeg' },
        { name: 'Multipurpose 2', image: 'assets/images/others/image48.jpeg' },
        { name: 'Multipurpose 3', image: 'assets/images/others/image49.jpg' },
        { name: 'Soap Oil 1', image: 'assets/images/others/image50.jpeg' },
        { name: 'Brass Shiner', image: 'assets/images/others/image51.png' },
        { name: 'Silver Shiner', image: 'assets/images/others/image52.png' },
        { name: 'Air Freshener 1', image: 'assets/images/others/image53.jpeg' },
        { name: 'Air Freshener 2', image: 'assets/images/others/image54.jpeg' }
      ]
    }
  ];

  openImageModal(imagePath: string): void {
    this.selectedImage = imagePath;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedImage = '';
    document.body.style.overflow = 'auto';
  }

  toggleCategory(categoryId: string): void {
    this.activeCategory = this.activeCategory === categoryId ? '' : categoryId;
  }

  isCategoryActive(categoryId: string): boolean {
    return this.activeCategory === categoryId;
  }

}