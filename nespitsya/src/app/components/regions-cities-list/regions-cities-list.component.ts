import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiSecondaryButtonComponent } from '../tui-components/tui-secondary-button/tui-secondary-button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as regionsCitiesListInterface from './regions-cities-list.interface';

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
export class RegionsCitiesListComponent implements regionsCitiesListInterface.IRegionsCitiesList {
    @Input()
    public groups: regionsCitiesListInterface.IRegionsList[] = [];
}
