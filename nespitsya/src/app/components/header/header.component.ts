import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiInputSearchComponent } from '../tui-input-search/tui-input-search.component';
import {TuiButton, TuiIcon, TuiOption} from '@taiga-ui/core';

@Component({
    selector: 'app-header',
    imports: [TuiInputSearchComponent,TuiIcon,TuiButton],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

}
