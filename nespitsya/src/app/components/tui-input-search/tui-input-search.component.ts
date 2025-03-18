import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiInputSearch } from '@taiga-ui/layout';
import { TuiTextfield } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-tui-input-search',
    imports: [TuiTextfield, TuiInputSearch, FormsModule],
    templateUrl: './tui-input-search.component.html',
    styleUrl: './tui-input-search.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputSearchComponent {
    public value: string = '';
}
