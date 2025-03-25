import { Routes } from '@angular/router';

import { HomePageComponent } from './components/pages/home.page/home.page.component';
import { CitiesPageComponent } from './components/pages/cities.page/cities.page.component';
import { FeedbackPageComponent } from './components/pages/feedback.page/feedback.page.component';
import { EventsPageComponent } from './components/pages/events.page/events.page.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'home/cities', component: CitiesPageComponent },
    //[ ] TODO: Сделать нормальную маршрутизацию по городам, например '/cities/yekaterinburg' и тд
    { path: 'home/cities/city', component: EventsPageComponent },
    { path: 'home/feedback', component: FeedbackPageComponent },
];
