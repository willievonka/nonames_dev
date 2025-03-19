import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiInputSearchComponent } from '../tui-input-search/tui-input-search.component';
import { TuiAccentButtonComponent } from '../tui-accent-button/tui-accent-button.component';
import { TuiFlatButtonComponent } from '../tui-flat-button/tui-flat-button.component';

@Component({
    selector: 'app-header',
    imports: [TuiInputSearchComponent, TuiAccentButtonComponent, TuiFlatButtonComponent],
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
