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
        { name: 'COCENTRATE 500ML', image: 'assets/products/Housekeeping/5f59692f-5ade-45ff-a8d2-cb63b5dd0aee.jpg' },
        { name: 'ENTRATE  1000ML', image: 'assets/products/Housekeeping/60a4bce4-64cd-4b0d-b1d6-b49014a6f1f5.jpg' },
        { name: 'DISHWASH COCENTRATE 5L', image: 'assets/products/Housekeeping/4a65495e-2a2a-4487-af20-171e82b90eba.jpg' },
        { name: 'DISHWASH COCENTRATE 50L', image: 'assets/products/Housekeeping/7a32d22c-5474-4677-b567-ceae09b50528.jpg' },
        { name: 'KITCHEN DEGREASER 500ML', image: 'assets/products/Housekeeping/641ef68a-8a50-441b-9201-28f881ca3f36.jpg' }
      ]
    },
    {
      id: 'fabric',
      title: 'Fabric Care',
      description: 'Zymetree offers Fabric Care solutions developed to deliver exceptional cleaning performance while preserving the quality and lifespan of every fabric. Formulated with advanced surfactants, brightening agents and fabric-safe conditioners, our products effectively remove dirt, stains and odors without causing fading, shrinkage or fiber damage. Whether for households, laundromats, hospitality or industrial laundry units, Zymetree Fabric Care products ensure consistent wash results, enhanced softness and long-lasting freshness. Designed for operational efficiency, our formulations reduce rewash rates, improve machine performance and optimize detergent usage—resulting in significant cost savings and improved workflow.  We also offer customized solutions for various fabric cleaning related problem.',
      icon: 'bi-stars',
      products: [
        { name: 'PREMIUM DETERGENT LIQUID 1 LTR', image: 'assets/products/Housekeeping/c7f40199-6caf-47b8-bb0b-7e61ab1c5433.jpg' },
        { name: 'DETERGENT LIQUID 1 LTR', image: 'assets/products/Housekeeping/0fd4848c-f97b-4ba2-99df-52253b3892bc.png' },
        { name: 'DETERGENT LIQUID 5 LTR', image: 'assets/products/Housekeeping/27ea9d33-eb74-4aab-ad94-2d9bc2ab8545.jpg' },
        { name: 'DETERGENT LIQUID 50L', image: 'assets/products/Housekeeping/90cd22fd-8d0f-41ff-9bb7-eb8dcb8948ce.jpg' },
        { name: 'DETERGENT POWDER 1 KG', image: 'assets/products/Housekeeping/db996062-e946-4e73-880d-01bf75627840.jpg' },
        { name: 'DETERGENT POWDER 2Kg', image: 'assets/products/Housekeeping/7faf2d56-bd81-4945-9963-045c84ae4b95.jpg' },
        { name: 'FABRIC CONDITIONER  500ML', image: 'assets/products/Housekeeping/458c0a46-96d0-45e2-935b-3b578a677585.jpg' },
        { name: 'FABRIC CONDITIONER  500ML', image: 'assets/products/Housekeeping/b9a19c7d-1b9d-4dc6-91b2-0ae21fab837f.jpg' },
        { name: 'CLOTH BLEACH 600ML', image: 'assets/products/Housekeeping/e726c6cb-9e1d-49b6-bd67-a9d9196bcc7e.png' },
        { name: 'CLOTH BLEACH 1000ML', image: 'assets/products/Housekeeping/bbf94442-3c0e-4505-af20-2b0418689b24.png' },
        { name: 'WASHING MACHINE DRUM CLEANER POUCH', image: 'assets/products/Housekeeping/a070ad39-c2f5-482b-b4c3-31a44bea2889.jpg' }
      ]
    },
    {
      id: 'bathroom',
      title: 'Bathroom Care',
      description: 'At Zymetree, our Bathroom Tiles & Toilet Care solutions are formulated to ensure superior hygiene, long-lasting cleanliness, and effective protection across all sanitary environments. Developed with advanced descaling, disinfecting and stain-removal agents, our products efficiently eliminate hard water deposits, soap scum, mineral buildup, and microbial contaminants—restoring surfaces to their original shine. Each formulation is engineered to be surface-safe, ensuring compatibility with ceramic, porcelain, vitrified tiles, stainless steel fixtures, and modern sanitaryware.Designed for both domestic and institutional use, Zymetree Bathroom & Toilet Care products support high hygiene standards, reduced cleaning time, and improved maintenance efficiency. Trusted by households, hotels, industries, and facility management teams, our solutions deliver consistent, reliable performance that enhances sanitation, safety, and overall washroom experience. At Zymetree, we remain committed to providing high-quality cleaning solutions that promote healthier spaces and professional-grade cleanliness.',
      icon: 'bi-droplet',
      products: [
        { name: 'TOILET CLEANER 500ML', image: 'assets/products/Housekeeping/10f67d0c-404f-4a78-9a06-354ded53dc95.jpg' },
        { name: 'TOILET CLEANER 1 LTR', image: 'assets/products/Housekeeping/3db9482c-8b39-4eb3-8e7b-32c187ab7dde.jpg' },
        { name: 'TOILET CLEANER 5 LTR', image: 'assets/products/Housekeeping/c6f22434-a7b9-4a32-babb-8c0b53d55a41.jpg' },
        { name: 'TOILET CLEANER 50 LTR', image: 'assets/products/Housekeeping/537eab03-6c1a-4700-9f6b-6ca71505e9ba.jpg' },
        { name: 'TILES CLEANER 500ML', image: 'assets/products/Housekeeping/2fb3c209-a055-4a4e-a66f-e47b3580a537.jpg' },
        { name: 'TILES CLEANER 1 LTR', image: 'assets/products/Housekeeping/776f7a21-cef1-4ded-a156-289b9031571f.jpg' },
        { name: 'TILES CLEANER 5 LTR', image: 'assets/products/Housekeeping/2622aed0-96fa-4d54-925e-3fde8ff44dc3.jpg' },
        { name: 'TILES CLEANER 50 LTR', image: 'assets/products/Housekeeping/62b1e746-f5b7-4c0d-9c7b-a5ffe56e8f6a.jpg' }
      ]
    },
    {
      id: 'floor',
      title: 'Floor Care',
      description: 'Our Floor Care solutions are engineered to deliver superior cleanliness, long-lasting shine, and enhanced surface protection for both residential and commercial environments. Developed with high-performance cleaning agents, our formulations effectively remove dirt, stains, grease, and microbial deposits without damaging flooring materials. Whether it is tile, marble, granite, concrete, vinyl, or industrial flooring, our products ensure consistent results with minimal effort. Designed for operational efficiency, Zymetree Floor Care solutions support faster cleaning cycles, improved hygiene standards, and reduced maintenance costs. Trusted by households, corporate offices, industries, and facility management teams, our products uphold the highest levels of quality, safety, and performance—ensuring every floor remains clean, polished, and professionally maintained.',
      icon: 'bi-grid-3x3',
      products: [
        { name: 'FLOOR CLEANER 500ML', image: 'assets/products/Housekeeping/633b18de-b194-4673-b447-9e5af4c4a938.jpg' },
        { name: 'FLOOR CLEANER 1 LTR', image: 'assets/products/Housekeeping/80d573d4-4d67-4ed4-808f-30bb51fabc0c.jpg' },
        { name: 'FLOOR CLEANER 5 LTR', image: 'assets/products/Housekeeping/c7db0f7b-1d4b-4736-a80f-ca26dbfff3e3.jpg' },
        { name: 'FLOOR CLEANER 50 LTR', image: 'assets/products/Housekeeping/d3aed07f-99e4-4941-b564-128f36a45018.jpg' }
      ]
    },
    {
      id: 'glass',
      title: 'Glass Care',
      description: 'Our Glass Cleaner is a high-performance formulation designed to remove dirt, dust, grease, fingerprints, and water marks from glass and shiny surfaces. It delivers a fast-drying, streak-free finish, leaving surfaces sparkling clean and transparent.',
      icon: 'bi-square',
      products: [
        { name: 'GLASS CLEANER 500ML', image: 'assets/products/Housekeeping/b8375421-a1f3-4ee2-90f1-92bc6b4d8525.jpg' },
        { name: 'GLASS CLEANER 5 LTR', image: 'assets/products/Housekeeping/a3c4b994-6a5c-4a88-921d-0c0255b04730.jpg' }
      ]
    },
    {
      id: 'auto',
      title: 'Auto Care',
      description: 'At Zymetree, our Auto Care range is engineered to deliver high-performance cleaning, superior surface protection, and a premium finish for all types of vehicles. Developed with advanced automotive-grade formulations, our products ensure effective removal of dirt, grime, grease, and road contaminants while safeguarding the paint, rubber, glass, and interior surfaces. Our comprehensive range—including Automobile Shampoo, Tyre Polish, Glass Cleaner and Air Freshener—supports both aesthetic enhancement and long-term maintenance.Zymetree Auto Care solutions are trusted by automotive service centers, car detailing professionals, fleet operators, and individual vehicle owners for their consistent results and operational efficiency. Each product is designed for ease of use, faster cleaning cycles, and durable shine, ensuring vehicles remain well-maintained, hygienic, and visually appealing. With a commitment to quality and innovation, Zymetree continues to deliver reliable auto care solutions that elevate vehicle care standards and enhance customer satisfaction.',
      icon: 'bi-car-front',
      products: [
        { name: 'CARWASH SHAMPOO 500ML', image: 'assets/products/Housekeeping/1192e146-9891-4ca7-8483-be3df739affe.jpg' },
        { name: 'CARWASH SHAMPOO 5L', image: 'assets/products/Housekeeping/73f4a8ea-4cd1-4f3d-b4c9-621d11a1a615.jpg' },
        { name: 'CARWASH SHAMPOO 50L', image: 'assets/products/Housekeeping/1d1a4ec3-643a-427d-99bc-2e70058b4243.jpg' },
        { name: 'CAR TYRE POLISH 500ML', image: 'assets/products/Housekeeping/40a69129-8e16-45ad-8566-8da17721cfd8.jpg' },
        { name: 'CAR TYRE POLISH 5L', image: 'assets/products/Housekeeping/60c4576e-3eea-48f5-9775-152d33a1b232.jpg' },
        { name: 'CAR TYRE POLISH 50L', image: 'assets/products/Housekeeping/0bab48e0-e487-491f-b3b0-8aa5e106feb0.jpg' },
        { name: 'WATERLESS CAR WASH 500ML', image: 'assets/products/Housekeeping/3a2a25fe-6073-491f-a846-a3750d1fe0c3.jpg' },
        { name: 'DASHBOARD POLISH 500ML', image: 'assets/products/Housekeeping/d6746365-487f-40a0-8d34-c3e562ae2fab.jpg' }
      ]
    },
    {
      id: 'disinfectant',
      title: 'Disinfectant Liquids',
      description: 'At Zymetree, our Disinfectant range is developed to deliver advanced protection, superior hygiene, and reliable germ elimination across diverse environments. Formulated with high-efficacy antimicrobial agents, our disinfectants effectively eliminate bacteria, viruses, fungi, and odor-causing microbes—ensuring safer and sanitized spaces. Designed for use in households, commercial establishments, healthcare environments, industries, and public facilities, Zymetree Disinfectant solutions provide fast action, long-lasting hygiene, and surface safety.Each formulation is engineered for consistent performance on high-touch surfaces, floors, equipment, and washrooms without causing corrosion or surface damage. Trusted for quality, safety, and compliance, Zymetree continues to support modern cleaning and sanitation standards with products that enhance health protection, reduce infection risks, and maintain a clean, hygienic environment. Our commitment is to deliver dependable disinfectant solutions that safeguard people, property, and everyday spaces.',
      icon: 'bi-shield-check',
      products: [
        { name: 'WHITE PHENYL', image: 'assets/products/Housekeeping/6d7f6acd-1f23-425a-90d1-f8636c658b5b.jpg' },
        { name: 'SCENTED PHENY 750ML', image: 'assets/products/Housekeeping/f89092fa-960f-446b-87ba-680ce2a9336f.jpg' },
        { name: 'SCENTED PHENYL 1000ML', image: 'assets/products/Housekeeping/c2b8fc11-96e3-4ad0-a7c8-ac30976741cb.jpg' },
        { name: 'SCENTED PHENYL 5L', image: 'assets/products/Housekeeping/b360a21c-98f6-4225-acc1-8de11063a4b8.jpg' },
        { name: 'PHENYL CONCENTRATE 250ML - SCENTED', image: 'assets/products/Housekeeping/ff5a6a21-00e8-487d-a432-8ada5832e815.jpg' },
        { name: 'PHENYL CONCENTRATE 1000ML - SCENTED', image: 'assets/products/Housekeeping/f76dfdbd-f589-486a-971e-a6918e30429e.jpg' },
        { name: 'PHENYL CONCENTRATE 5L - SCENTED', image: 'assets/products/Housekeeping/12e9a10f-a5b2-4de7-856a-269e8703c9cc.jpg' },
        { name: 'BLACK PHENYL 500ML', image: 'assets/products/Housekeeping/e85239e7-4beb-478b-aef2-4a6cd7127c8c.png' }
      ]
    },
    {
      id: 'others',
      title: 'Other Products',
      description: 'We also manufacture customised cleaning liquids tailored to meet the unique operational needs of various industries. Our advanced formulations are developed to address specific cleaning challenges across manufacturing units, institutions, commercial facilities, and specialized service environments. Whether it is high-foam, low-foam, neutral pH, degreasing, descaling, or application-specific solutions, Zymetree ensures precision, performance, and consistency in every customized product.Our expert R&D team works closely with clients to create solutions that enhance cleaning efficiency, support safety standards, and comply with industry requirements. Each formulation is tested for quality, stability, and effectiveness, ensuring optimum results on diverse surfaces and equipment. From bulk supply to specialized blends, Zymetree remains a trusted partner for custom cleaning solutions that improve productivity, reduce downtime, and deliver long-term value.With a strong commitment to innovation and reliability, Zymetree continues to provide tailored cleaning liquids that match the exact needs of modern industries.',
      icon: 'bi-boxes',
      products: [
        { name: 'MULTIPURPOSE CLEANER 1L', image: 'assets/products/Housekeeping/20a8679b-e20d-456e-8ebf-ccf760a06ea3.jpg' },
        { name: 'MULTIPURPOSE CLEANER 5L', image: 'assets/products/Housekeeping/28732856-cdff-4bd9-9ed3-2d4666493dfc.jpg' },
        { name: 'MULTIPURPOSE CLEANER 50L', image: 'assets/products/Housekeeping/5ea571b9-5e49-4513-8b19-c6888e1a5e9a.jpg' },
        { name: 'SOAP OIL 1L', image: 'assets/products/Housekeeping/20a8679b-e20d-456e-8ebf-ccf760a06ea3.jpg' },
        { name: 'DRAIN DECLOGGER POUCH', image: 'assets/products/Housekeeping/0733bc73-2b16-4b0e-a956-d3b58ebe491c.jpg' },
        { name: 'BRASS SHINER GEL- 100ML', image: 'assets/products/Housekeeping/bd1f0483-d11a-4097-b7a5-dea1149e8d26.png' },
        { name: 'SILVER SHINER GEL- 100ML', image: 'assets/products/Housekeeping/d4613a25-66c3-480d-96b6-4dfcfd5f8410.png' },
        { name: ' ROOM FRESHNER 250ML', image: 'assets/products/Housekeeping/b84d5e04-28e7-4b7b-80dc-089b5ed90c00.jpg' },
        { name: ' ROOM FRESHNER 5L', image: 'assets/products/Housekeeping/ae9acd33-5f1d-41e3-916e-33f23ec5d905.jpg' }
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