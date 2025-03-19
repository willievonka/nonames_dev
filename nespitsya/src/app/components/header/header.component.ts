import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiInputSearchComponent } from '../tui-input-search/tui-input-search.component';
import { TuiAccentButtonComponent } from '../tui-accent-button/tui-accent-button.component';

@Component({
    selector: 'app-header',
    imports: [TuiInputSearchComponent, TuiAccentButtonComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    public loginButtonIcon: string = '@tui.user';
    public loginButtonText: string = 'ВОЙТИ';
}
