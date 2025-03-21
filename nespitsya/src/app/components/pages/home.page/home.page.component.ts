import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiBreadcrumbsComponent } from '../../tui-components/tui-breadcrumbs/tui-breadcrumbs.component';
import { TuiEventCardComponent } from '../../tui-components/tui-event-card/tui-event-card.component';
import { TuiSecondaryButtonComponent } from '../../tui-components/tui-secondary-button/tui-secondary-button.component';


@Component({
    selector: 'app-home-page',
    imports: [
        TuiBreadcrumbsComponent,
        TuiEventCardComponent,
        TuiSecondaryButtonComponent,
    ],
    templateUrl: './home.page.component.html',
    styleUrl: './home.page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
    public cityLocation: string = 'Екатеринбурге';

    public moreEventsButtonText: string = `Больше событий в ${this.cityLocation}`;
    public moreEventsButtonIcon: string = '@tui.corner-down-right';
}
