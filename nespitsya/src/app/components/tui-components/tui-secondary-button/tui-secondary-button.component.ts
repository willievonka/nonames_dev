import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';


@Component({
    selector: 'app-tui-secondary-button',
    imports: [
        TuiButton,
        TuiIcon,
    ],
    templateUrl: './tui-secondary-button.component.html',
    styleUrl: './tui-secondary-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSecondaryButtonComponent {
    @Input()
    public buttonText: string = '';
    @Input()
    public buttonIcon: string = '';
}
