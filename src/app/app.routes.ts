import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'sobre',
        loadComponent: () => import('./sobre/sobre.component').then(m => m.SobreComponent)
    },
    { path: '**', redirectTo: '' }
];
