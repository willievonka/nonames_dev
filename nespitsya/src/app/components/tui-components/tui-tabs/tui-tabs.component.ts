import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
    @Input()
    public tabs: string[] = [];
    
    public activeItemIndex: number = 0;
    
}
