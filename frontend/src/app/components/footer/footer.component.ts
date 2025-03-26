import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiFlatButtonComponent } from '../tui-components/tui-button/tui-flat-button/tui-flat-button.component';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-footer',
    imports: [
        TuiFlatButtonComponent,
        RouterLink,
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    public flatButtonIconLeft: string = 'Связаться с нами';
    public flatButtonIconRight: string = '@tui.flag';
    public flatButtonSize: 's' | 'm' | 'l' | 'xl' | 'xs' = 'xs';
}
