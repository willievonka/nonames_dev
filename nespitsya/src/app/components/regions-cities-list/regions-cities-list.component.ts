import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, Input, QueryList, ViewChildren } from '@angular/core';
import { TuiSecondaryButtonComponent } from '../tui-components/tui-secondary-button/tui-secondary-button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as regionsCitiesListInterface from './regions-cities-list.interface';
import { ActivePanelService } from '../../services/active-panel-service';

@Component({
    selector: 'app-regions-cities-list',
    imports: [
        CommonModule,
        TuiSecondaryButtonComponent,
        RouterLink,
    ],
    templateUrl: './regions-cities-list.component.html',
    styleUrl: './regions-cities-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsCitiesListComponent implements regionsCitiesListInterface.IRegionsCitiesList, AfterViewInit {
    @ViewChildren('name')
    public name?: QueryList<ElementRef>;

    @Input()
    public groups: regionsCitiesListInterface.IRegionsGroup[] = [];

    protected activeService: ActivePanelService = inject(ActivePanelService);
    
    private _index: number = 0;

    public ngAfterViewInit(): void {
        this.activeService.subscribe((index: number) => {
            console.log(index);
            if (this.name && this._index !== index) {
                this.name.toArray()[index].nativeElement.scrollIntoView({ behavior: 'smooth' });
            }
        });

        document.addEventListener('scroll', () => {
            if (this.name) {
                this.name.toArray().forEach((element: ElementRef, index: number) => {
                    const rect: DOMRect = element.nativeElement.getBoundingClientRect();
                    if (rect.top < document.documentElement.scrollTop) {
                        this._index = index;
                        console.log(index);
                        console.log(document.documentElement.scrollTop);
                        this.activeService.setIndex(index);

                        return;
                    }
                });
            }
        });
    }
}
