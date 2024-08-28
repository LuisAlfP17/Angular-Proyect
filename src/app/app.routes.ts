import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/LabsComponent';

export const routes: Routes = [
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: '', 
        component: LabsComponent 
    }
  ];