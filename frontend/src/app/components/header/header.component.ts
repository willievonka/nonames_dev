import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiInputSearchComponent } from '../tui-components/tui-input-search/tui-input-search.component';
import { TuiAccentButtonComponent } from '../tui-components/tui-button/tui-accent-button/tui-accent-button.component';
import { TuiDropdownComponent } from '../tui-components/tui-dropdown/tui-dropdown.component';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-header',
    imports: [
        RouterLink,
        TuiInputSearchComponent,
        TuiAccentButtonComponent,
        TuiDropdownComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    public loginButtonIcon: string = '@tui.user';
    public loginButtonText: string = 'ВОЙТИ';

    public dropdownIcon: string = '@tui.text';
}
