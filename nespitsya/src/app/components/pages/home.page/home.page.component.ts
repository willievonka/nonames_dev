import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiBreadcrumbsComponent } from '../../tui-components/tui-breadcrumbs/tui-breadcrumbs.component';
import { TuiEventCardComponent } from '../../tui-components/tui-event-card/tui-event-card.component';


@Component({
    selector: 'app-home-page',
    imports: [
        TuiTitle,
        TuiBreadcrumbsComponent,
        TuiEventCardComponent,
    ],
    templateUrl: './home.page.component.html',
    styleUrl: './home.page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
    public cityLocation: string = 'Екатеринбурге';
}
