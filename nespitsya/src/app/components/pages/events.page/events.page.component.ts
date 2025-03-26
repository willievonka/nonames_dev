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
    public cityName: string = '';
    public cityId: string = '';

    public activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    
    public searchResultsCount: number = 0;

    public breadcrumbsItems: Array<{ caption: string, routerLink: string }> = [];

    constructor() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.cityId = params['id'] as string;
        });

        this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
            this.cityName = queryParams['name'] || 'Неизвестный город';
            this.updateBreadcrumbs();
        });
    }

    /**
     * Updates the breadcrumbsItems array with the current city name and ID.
     */
    private updateBreadcrumbs(): void {
        this.breadcrumbsItems = [
            { caption: 'Главная', routerLink: '/home' },
            { caption: 'Города', routerLink: '/home/cities' },
            { caption: this.cityName, routerLink: this.activatedRoute.snapshot.url.join('/') },
        ];
    }
}
