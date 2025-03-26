import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiBreadcrumbsComponent } from '../../tui-components/tui-breadcrumbs/tui-breadcrumbs.component';
import { TuiEventCardComponent } from '../../tui-components/tui-event-card/tui-event-card.component';
import { TuiSecondaryButtonComponent } from '../../tui-components/tui-button/tui-secondary-button/tui-secondary-button.component';
import { CityDeclensionPipe } from '../../../pipes/city-declension/city-declension.pipe';
import { RouterLink } from '@angular/router';
import { ICity } from '../../regions-cities-list/regions-cities-list.interface';


@Component({
    selector: 'app-home-page',
    imports: [
        CommonModule,
        TuiBreadcrumbsComponent,
        TuiEventCardComponent,
        TuiSecondaryButtonComponent,
        CityDeclensionPipe,
        RouterLink,
    ],
    templateUrl: './home.page.component.html',
    styleUrl: './home.page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
    public city: ICity = {
        id: 6,
        name: 'Екатеринбург',
    };

    public breadcrumbsItems: Array<{ caption: string, routerLink: string }> = [
        { caption: 'Главная', routerLink: '/home' },
    ];

    public events: TuiEventCardComponent[] = [
        {
            image: 'https://i.imgur.com/5qSSGHi.jpeg',
            title: 'Оркестр CAGMO | Концерт при свечах',
            place: 'Детская филармония',
            date: new Date('2025-03-12T12:00:00'),
            price: 'от 1500₽',
            tags:  ['Классическая музыка', 'Саундтрек', 'Неоклассика', 'Шоу', 'Концерт'],
            routerLink: '#',
        },
        {
            image: 'https://i.imgur.com/5qSSGHi.jpeg',
            title: 'Оркестр CAGMO | Концерт при свечах',
            place: 'Детская филармония',
            date: new Date('2025-03-12T12:00:00'),
            price: 'от 1500₽',
            tags:  ['Классическая музыка', 'Саундтрек', 'Неоклассика', 'Шоу', 'Концерт'],
            routerLink: '#',
        },
        {
            image: 'https://i.imgur.com/5qSSGHi.jpeg',
            title: 'Оркестр CAGMO | Концерт при свечах',
            place: 'Детская филармония',
            date: new Date('2025-03-12T12:00:00'),
            price: 'от 1500₽',
            tags:  ['Классическая музыка', 'Саундтрек', 'Неоклассика', 'Шоу', 'Концерт'],
            routerLink: '#',
        },
    ];

    public moreEventsButtonText: string = `Больше событий в ${this.city.name}`;
    public moreEventsButtonIcon: string = '@tui.corner-down-right';
}
