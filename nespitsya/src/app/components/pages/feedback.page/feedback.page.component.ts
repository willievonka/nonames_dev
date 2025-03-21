import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiBreadcrumbsComponent } from '../../tui-components/tui-breadcrumbs/tui-breadcrumbs.component';
import { TuiInputComponent } from '../../tui-components/tui-input/tui-input.component';

@Component({
    selector: 'app-feedback-page',
    imports: [
        TuiBreadcrumbsComponent,
        TuiInputComponent,
    ],
    templateUrl: './feedback.page.component.html',
    styleUrl: './feedback.page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackPageComponent {

}
