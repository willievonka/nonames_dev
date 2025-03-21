import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiSecondaryButtonComponent } from '../tui-components/tui-secondary-button/tui-secondary-button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IRegion } from './regions-cities-list.interface';

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
export class RegionsCitiesListComponent {
    @Input()
    public regions: IRegion[] = [];
}
