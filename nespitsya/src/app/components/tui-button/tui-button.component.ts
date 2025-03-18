import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';


@Component({
    selector: 'app-tui-button',
    imports: [TuiButton],
    templateUrl: './tui-button.component.html',
    styleUrl: './tui-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiButtonComponent {

}
