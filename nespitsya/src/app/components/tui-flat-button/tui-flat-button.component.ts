import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
    selector: 'app-tui-flat-button',
    imports: [TuiButton, TuiIcon],
    templateUrl: './tui-flat-button.component.html',
    styleUrl: './tui-flat-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TuiFlatButtonComponent {
    @Input() public buttonIconLeft: string = '';
    @Input() public buttonIconRight: string = '';
}
