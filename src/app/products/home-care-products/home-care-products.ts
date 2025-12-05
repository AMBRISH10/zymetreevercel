import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Product {
  name: string;
  desc: string;
}

interface TabContent {
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  note?: string;
  benefits?: string[];
  icon: string;
}

interface NewsCard {
  day: string;
  month: string;
  imageUrl: string;
  category: string;
  title: string;
  subTitle: string;
  description: string;
  timestamp: string;
  commentsCount: number;
}
@Component({
  selector: 'app-home-care-products',
  imports: [CommonModule],
  templateUrl: './home-care-products.html',
  styleUrl: './home-care-products.css',
})
export class HomeCareProducts {
  activeTab: string = 'kitchenCare';
  isVisible: { [key: string]: boolean } = {};
  private observer!: IntersectionObserver;


  newsCard: NewsCard = {
    day: '27',
    month: 'Mar',
    imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg',
    category: 'Photos',
    title: 'City Lights in New York',
    subTitle: 'The city that never sleeps.',
    description: 'New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.',
    timestamp: '6 mins ago',
    commentsCount: 39
  };

  showDescription = false;

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }
  products: { [key: string]: Product[] } = {
    kitchenCare: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    fabricCare: [
      { name: 'Zymetreat AS-R01', desc: 'Antiscalant' },
      { name: 'Zymetreat MB-R02', desc: 'Bio Dispersant' },
      { name: 'Zymetreat MB-R01', desc: 'Biocide' }
    ],
    boiler: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    toiletCare: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    floorCare: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    autoCare: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ],
    disinfectants: [
      { name: 'Zymetreat PM-C01', desc: 'pH Modifier' },
      { name: 'Zymetreat AS-C01', desc: 'Antiscalant' },
      { name: 'Zymetreat DS-C01', desc: 'Descalant' },
      { name: 'Zymetreat MB-C01', desc: 'Microbiocide' },
      { name: 'Zymetreat MB-C02', desc: 'Bio-Dispersant' },
      { name: 'Zymetreat CI-C01', desc: 'Corrosion Inhibitor' }
    ]
  };

  tabContent: { [key: string]: TabContent } = {
    kitchenCare: {
      title: 'Kitchen Care',
      subtitle: 'Ensure Peak Performance: Cooling Water Treatment Solutions',
      description: 'Protect your critical equipment and optimize cooling system efficiency with our comprehensive line of cooling water treatment chemicals. Untreated cooling water leads to costly problems like corrosion, scaling, and biological growth. These issues reduce heat transfer, increase downtime, and shorten equipment life. Let us help you achieve reliable cooling, reduced maintenance costs, and extended equipment life.',
      highlight: 'Our tailored chemical programs prevent these concerns, maximizing system performance and energy savings.',
      icon: 'zap'
    },
    fabricCare: {
      title: 'Fabric Care',
      subtitle: 'Unlock the Power of Pure Water: Reverse Osmosis(RO) Chemicals',
      description: 'Achieve exceptional water quality and optimize your reverse osmosis (RO) system performance with our comprehensive line of RO chemicals. Traditional water contains impurities like dissolved salts, minerals, and organic matter. RO membranes act as a barrier, allowing only purified water to pass through, leaving contaminants behind.',
      highlight: 'By using our RO chemicals, you can ensure consistent production of high-purity water, extend membrane life, and minimize downtime for maintenance. Let us help your achieve superior water quality and maximize the return on your RO system investment.',
      note: 'However, over time, these contaminants can accumulate on the membrane surface, reducing efficiency and requiring costly replacements.',
      icon: 'droplets'
    },
    toiletCare: {
      title: 'Bathroom Tiles & Toilet Care',
      subtitle: 'Safeguard Your Steam: Effective Boiler Water Treatment Solutions',
      description: 'Ensure the safe and efficient operation of your boiler system with our proven boiler water treatment chemicals. Hard water and impurities can wreak havoc on boilers, causing corrosion, scale buildup, and foaming. These issues compromise boiler efficiency, increase maintenance costs, and pose safety risks.',
      highlight: 'Our comprehensive boiler water treatment program utilizes targeted chemicals to prevent corrosion, control scale, and minimize foaming. Experience the benefits of clean and reliable boiler operation. Our treatment programs are customized to your specific boiler type and operating conditions. Let us help you optimize boiler performance, ensure steam quality, and achieve peace of mind.',
      benefits: [
        'Prevent corrosion: Protect your boiler tubes and extend equipment life.',
        'Control scale: Eliminate mineral deposits that impede heat transfer and reduce energy consumption.',
        'Minimize foaming: Maintain proper water levels and prevent carryover of boiler water into the steam system.'
      ],
      icon: 'shield'
    },
    floorCare: {
      title: 'Flood Care',
      subtitle: 'Safeguard Your Steam: Effective Boiler Water Treatment Solutions',
      description: 'Ensure the safe and efficient operation of your boiler system with our proven boiler water treatment chemicals. Hard water and impurities can wreak havoc on boilers, causing corrosion, scale buildup, and foaming. These issues compromise boiler efficiency, increase maintenance costs, and pose safety risks.',
      highlight: 'Our comprehensive boiler water treatment program utilizes targeted chemicals to prevent corrosion, control scale, and minimize foaming. Experience the benefits of clean and reliable boiler operation. Our treatment programs are customized to your specific boiler type and operating conditions. Let us help you optimize boiler performance, ensure steam quality, and achieve peace of mind.',
      benefits: [
        'Prevent corrosion: Protect your boiler tubes and extend equipment life.',
        'Control scale: Eliminate mineral deposits that impede heat transfer and reduce energy consumption.',
        'Minimize foaming: Maintain proper water levels and prevent carryover of boiler water into the steam system.'
      ],
      icon: 'shield'
    },
    autoCare: {
      title: 'Auto Care',
      subtitle: 'Safeguard Your Steam: Effective Boiler Water Treatment Solutions',
      description: 'Ensure the safe and efficient operation of your boiler system with our proven boiler water treatment chemicals. Hard water and impurities can wreak havoc on boilers, causing corrosion, scale buildup, and foaming. These issues compromise boiler efficiency, increase maintenance costs, and pose safety risks.',
      highlight: 'Our comprehensive boiler water treatment program utilizes targeted chemicals to prevent corrosion, control scale, and minimize foaming. Experience the benefits of clean and reliable boiler operation. Our treatment programs are customized to your specific boiler type and operating conditions. Let us help you optimize boiler performance, ensure steam quality, and achieve peace of mind.',
      benefits: [
        'Prevent corrosion: Protect your boiler tubes and extend equipment life.',
        'Control scale: Eliminate mineral deposits that impede heat transfer and reduce energy consumption.',
        'Minimize foaming: Maintain proper water levels and prevent carryover of boiler water into the steam system.'
      ],
      icon: 'shield'
    },
    disinfectants: {
      title: 'Disinfectants',
      subtitle: 'Safeguard Your Steam: Effective Boiler Water Treatment Solutions',
      description: 'Ensure the safe and efficient operation of your boiler system with our proven boiler water treatment chemicals. Hard water and impurities can wreak havoc on boilers, causing corrosion, scale buildup, and foaming. These issues compromise boiler efficiency, increase maintenance costs, and pose safety risks.',
      highlight: 'Our comprehensive boiler water treatment program utilizes targeted chemicals to prevent corrosion, control scale, and minimize foaming. Experience the benefits of clean and reliable boiler operation. Our treatment programs are customized to your specific boiler type and operating conditions. Let us help you optimize boiler performance, ensure steam quality, and achieve peace of mind.',
      benefits: [
        'Prevent corrosion: Protect your boiler tubes and extend equipment life.',
        'Control scale: Eliminate mineral deposits that impede heat transfer and reduce energy consumption.',
        'Minimize foaming: Maintain proper water levels and prevent carryover of boiler water into the steam system.'
      ],
      icon: 'shield'
    }
  };

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            this.isVisible[id] = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        this.observer.observe(el);
      });
    }, 100);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  getActiveTabContent(): TabContent {
    return this.tabContent[this.activeTab];
  }

  getActiveProducts(): Product[] {
    return this.products[this.activeTab];
  }

  getProductLabel(): string {
    return this.activeTab === 'fabricCare' ? 'Bio Dispersant' : 'Antiscalant';
  }

  getAnimationStyle(elementId: string, delay: number = 0): any {
    return {
      opacity: this.isVisible[elementId] ? 1 : 0,
      transform: this.isVisible[elementId] ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.8s ease-out ${delay}s`
    };
  }
}
