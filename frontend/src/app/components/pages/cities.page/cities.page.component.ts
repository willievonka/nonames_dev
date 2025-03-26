import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiBreadcrumbsComponent } from '../../tui-components/tui-breadcrumbs/tui-breadcrumbs.component';
import { RegionsCitiesListComponent } from '../../regions-cities-list/regions-cities-list.component';
import { IRegionsGroup } from '../../regions-cities-list/regions-cities-list.interface';
import { TuiTabsComponent } from '../../tui-components/tui-tabs/tui-tabs.component';
import { ActivePanelService } from '../../../services/active-panel-service';

@Component({
    selector: 'app-cities-page',
    imports: [
        CommonModule,
        TuiBreadcrumbsComponent,
        RegionsCitiesListComponent,
        TuiTabsComponent,
    ],
    providers: [
        ActivePanelService,
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

    public regionsList: IRegionsGroup[] = [
        {
            name: 'М',
            regions: [
                {
                    name: 'Московская область',
                    cities: [
                        { id: 1, name: 'Красногорск' },
                        { id: 2, name: 'Химки', },
                        { id: 3, name: 'Зеленоград', }
                    ]
                },
            ]
        },
        {
            name: 'Л',
            regions: [
                {
                    name: 'Ленинградская область',
                    cities: [
                        { id: 4, name: 'Пушкин', },
                        { id: 5, name: 'Петергоф', }
                    ]
                },
            ]
        },
        {
            name: 'С',
            regions: [
                {
                    name: 'Cвердловская область',
                    cities: [
                        { id: 6, name: 'Екатеринбург', },
                        { id: 7, name: 'Ревда', },
                        { id: 8, name: 'Первоуральск', },
                        { id: 9, name: 'Верхняя Пышма', }
                    ]
                },
            ]
        },
    ];

    public readonly regionsTabs: string[] = this.regionsList.map((group: IRegionsGroup) => group.name);
}
