import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiBreadcrumbsComponent } from '../../tui-components/tui-breadcrumbs/tui-breadcrumbs.component';
import { RegionsCitiesListComponent } from '../../regions-cities-list/regions-cities-list.component';
import { IRegion } from '../../regions-cities-list/regions-cities-list.interface';

@Component({
    selector: 'app-cities-page',
    imports: [
        CommonModule,
        TuiBreadcrumbsComponent,
        RegionsCitiesListComponent,
    ],
    templateUrl: './cities.page.component.html',
    styleUrl: './cities.page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesPageComponent {
    public breadcrumbsItems: Array<{ caption: string, routerLink: string }> = [
        { caption: 'Главная', routerLink: '/home' },
        { caption: 'Города', routerLink:'/home/cities' }
    ];

    public regions: IRegion[] = [
        { 
            name: 'Московская область', 
            cities: [ 
                { name: 'Красногорск', routerLink: '' }, 
                { name: 'Химки', routerLink: '' }, 
                { name: 'Зеленоград', routerLink: '' } 
            ] 
        },
        { 
            name: 'Ленинградская область', 
            cities: [ 
                { name: 'Пушкин', routerLink: '' }, 
                { name: 'Петергоф', routerLink: '' } 
            ] 
        },
        { 
            name: 'Cвердловская область', 
            cities: [ 
                { name: 'Екатеринбург', routerLink: 'home/cities/yekaterinburg' }, 
                { name: 'Ревда', routerLink: '' }, 
                { name: 'Первоуральск', routerLink: '' }, 
                { name: 'Верхняя Пышма', routerLink: '' } 
            ] 
        },
    ];
}
