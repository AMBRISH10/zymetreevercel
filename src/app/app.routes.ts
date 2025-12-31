import { Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Agro } from './products/agro/agro';
import { Bioculture } from './products/bioculture/bioculture';
import { ChemicalsForCleaning } from './products/chemicals-for-cleaning/chemicals-for-cleaning';
import { HomeCareProducts } from './products/home-care-products/home-care-products';
import { PersonalCare } from './products/personal-care/personal-care';
import { SpecialityChemicals } from './products/speciality-chemicals/speciality-chemicals';
import { NotFound } from './not-found/not-found';
import { Improve } from './projects/improve/improve';
import { Electrocoagulation } from './projects/electrocoagulation/electrocoagulation';
import { Mbr } from './projects/mbr/mbr';
import { OnlineWaterQualityMonitoring } from './projects/online-water-quality-monitoring/online-water-quality-monitoring';
import { BiofertilizerProductionConsultancy } from './services/biofertilizer-production-consultancy/biofertilizer-production-consultancy';
import { EnvironmentManagementConsultancy } from './services/environment-management-consultancy/environment-management-consultancy';
import { EssentialOilProductionConsultancy } from './services/essential-oil-production-consultancy/essential-oil-production-consultancy';
import { WastewaterTreatmentConsultancy } from './services/wastewater-treatment-consultancy/wastewater-treatment-consultancy';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home),
        // title: 'Home - Zymetree'
    },
    {
        path: 'about-us',
        component: AboutUs
    },
    {
        path: 'contact-us',
        component: ContactUs
    },
    {
        path: 'products',
        children: [
            {
                path: 'agro',
                component: Agro
            },
            {
                path: 'bioculture',
                component: Bioculture
            },
            {
                path: 'chemicals-for-cleaning',
                component: ChemicalsForCleaning
            },
            {
                path: 'home-care-products',
                component: HomeCareProducts
            },
            {
                path: 'personal-care',
                component: PersonalCare
            },
            {
                path: 'speciality-chemicals',
                component: SpecialityChemicals
            }
        ]
    },
    {
        path: 'projects',
        children: [
            {
                path: 'improve',
                component: Improve
            },
            {
                path: 'electrocoagulation',
                component: Electrocoagulation
            },
            {
                path: 'mbr',
                component: Mbr
            },
            {
                path: 'monitoring',
                component: OnlineWaterQualityMonitoring
            }
        ]
    },
    {
        path: 'services',
        children: [
            {
                path: 'biofertilizer',
                component: BiofertilizerProductionConsultancy
            },
            {
                path: 'environment',
                component: EnvironmentManagementConsultancy
            },
            {
                path: 'essential-oil',
                component: EssentialOilProductionConsultancy
            },
            {
                path: 'wastewater',
                component: WastewaterTreatmentConsultancy
            }
        ]
    },
    {
        path: '**',
        component: NotFound
    }
];
