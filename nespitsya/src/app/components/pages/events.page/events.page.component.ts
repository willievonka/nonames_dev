import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiBreadcrumbsComponent } from '../../tui-components/tui-breadcrumbs/tui-breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'app-events.page',
    imports: [
        CommonModule,
        TuiBreadcrumbsComponent,
        
    ],
    templateUrl: './events.page.component.html',
    styleUrl: './events.page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsPageComponent {
    public cityLocation: string = 'Екатеринбург';

    public breadcrumbsItems: Array<{ caption: string, routerLink: string }> = [
        { caption: 'Главная', routerLink: '/home' },
        { caption: 'Города', routerLink:'/home/cities' },
        { caption: 'Город', routerLink:'/home/cities/:id' },
    ];

    public searchResultsCount: number = 0;

    public activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    constructor() {
        this.activatedRoute.params.subscribe((params: Params) => {
            const idParam: string = params['id'] as string;
            console.log(idParam);
        });
    }
}
