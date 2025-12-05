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

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home),
        title: 'Home - Zymetree'
    },
    {
        path: 'about-us',
        component: AboutUs
    },
    {
        path: 'contact-us',
        component: ContactUs
    },
    // {
    //     path: 'services',
    //     component: ''
    // },
    // {
    //     path: 'projects',
    //     component: ''
    // },
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
        path: '**',
        component: NotFound
    }
];
