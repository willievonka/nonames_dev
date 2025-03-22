import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiInputSearchComponent } from '../tui-components/tui-input-search/tui-input-search.component';
import { TuiAccentButtonComponent } from '../tui-components/tui-accent-button/tui-accent-button.component';
import { TuiFlatButtonComponent } from '../tui-components/tui-flat-button/tui-flat-button.component';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-header',
    imports: [
        RouterLink,
        TuiInputSearchComponent, 
        TuiAccentButtonComponent, 
        TuiFlatButtonComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    public loginButtonIcon: string = '@tui.user';
    public loginButtonText: string = 'ВОЙТИ';

    public flatButtonIconLeft: string = '@tui.text';
    public flatButtonIconRight: string = '@tui.chevron-down';
}
