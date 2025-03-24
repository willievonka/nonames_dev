import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiBreadcrumbsComponent } from '../../tui-components/tui-breadcrumbs/tui-breadcrumbs.component';
import { RegionsCitiesListComponent } from '../../regions-cities-list/regions-cities-list.component';
import { IRegionsList } from '../../regions-cities-list/regions-cities-list.interface';
import { TuiTabsComponent } from '../../tui-components/tui-tabs/tui-tabs.component';

@Component({
    selector: 'app-cities-page',
    imports: [
        CommonModule,
        TuiBreadcrumbsComponent,
        RegionsCitiesListComponent,
        TuiTabsComponent,
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

    public readonly regionsTabs: string[] = ['А', 'Б', 'В', 'Д', 'Е', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Х', 'Ч', 'Я'];

    public regionsList: IRegionsList[] = [
        {
            category: 'М',
            regions: [
                {
                    name: 'Московская область',
                    cities: [
                        { name: 'Красногорск', routerLink: '' },
                        { name: 'Химки', routerLink: '' },
                        { name: 'Зеленоград', routerLink: '' }
                    ]
                },
                {
                    name: 'Московская область',
                    cities: [
                        { name: 'Красногорск', routerLink: '' },
                        { name: 'Химки', routerLink: '' },
                        { name: 'Зеленоград', routerLink: '' }
                    ]
                },
                {
                    name: 'Московская область',
                    cities: [
                        { name: 'Красногорск', routerLink: '' },
                        { name: 'Химки', routerLink: '' },
                        { name: 'Зеленоград', routerLink: '' }
                    ]
                },
                {
                    name: 'Московская область',
                    cities: [
                        { name: 'Красногорск', routerLink: '' },
                        { name: 'Химки', routerLink: '' },
                        { name: 'Зеленоград', routerLink: '' }
                    ]
                },
                {
                    name: 'Московская область',
                    cities: [
                        { name: 'Красногорск', routerLink: '' },
                        { name: 'Химки', routerLink: '' },
                        { name: 'Зеленоград', routerLink: '' }
                    ]
                },
            ]
        },
        {
            category: 'Л',
            regions: [
                {
                    name: 'Ленинградская область',
                    cities: [
                        { name: 'Пушкин', routerLink: '' },
                        { name: 'Петергоф', routerLink: '' }
                    ]
                },
            ]
        },
        {
            category: 'С',
            regions: [
                {
                    name: 'Cвердловская область',
                    cities: [
                        { name: 'Екатеринбург', routerLink: 'home/cities/yekaterinburg' },
                        { name: 'Ревда', routerLink: '' },
                        { name: 'Первоуральск', routerLink: '' },
                        { name: 'Верхняя Пышма', routerLink: '' }
                    ]
                },
            ]
        },
    ];
}
