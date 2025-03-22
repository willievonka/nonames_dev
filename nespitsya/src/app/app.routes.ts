import { Routes } from '@angular/router';

import { HomePageComponent } from './components/pages/home.page/home.page.component';
import { CitiesPageComponent } from './components/pages/cities.page/cities.page.component';
import { FeedbackPageComponent } from './components/pages/feedback.page/feedback.page.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'home/cities', component: CitiesPageComponent },
    { path: 'feedback', component: FeedbackPageComponent },
];
