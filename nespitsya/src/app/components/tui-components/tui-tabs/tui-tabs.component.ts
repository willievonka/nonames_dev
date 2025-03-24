import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTabs } from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-tui-tabs',
    imports: [
        CommonModule,
        TuiTabs,
    ],
    templateUrl: './tui-tabs.component.html',
    styleUrl: './tui-tabs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTabsComponent {
    public activeItemIndex: number = 0;
}
