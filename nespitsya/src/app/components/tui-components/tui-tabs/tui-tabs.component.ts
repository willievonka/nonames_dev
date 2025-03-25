import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { TuiTabs } from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';
import { ActivePanelService } from '../../../services/active-panel-service';


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

    /**
     *
     */
    protected get activeItemIndex(): number {
        return this._activeItemIndex;
    }
    
    /**
     *
     */
    protected set activeItemIndex(value: number) {
        console.log(value, this.activeService.getIndex());
        this._activeItemIndex = value;
        this.activeService.setIndex(value);
        this.chageDetectRef.detectChanges();
    }
    
    protected chageDetectRef: ChangeDetectorRef = inject(ChangeDetectorRef);

    protected activeService: ActivePanelService = inject(ActivePanelService);
    
    private _activeItemIndex: number = 0;
    
    constructor() {
        this.activeService.subscribe((index: number) => {
            if (this._activeItemIndex !== index) {
                this.activeItemIndex = index;
            }
        });
    }
}
