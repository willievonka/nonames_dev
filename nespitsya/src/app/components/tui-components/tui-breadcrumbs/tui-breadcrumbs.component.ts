import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TuiItem } from '@taiga-ui/cdk';
import { TuiSizeL } from '@taiga-ui/core';
import { TuiBreadcrumbs } from '@taiga-ui/kit';



@Component({
    selector: 'app-tui-breadcrumbs',
    imports: [
        TuiItem, 
        TuiBreadcrumbs, 
        CommonModule, 
        RouterLink,
    ],
    templateUrl: './tui-breadcrumbs.component.html',
    styleUrl: './tui-breadcrumbs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TuiBreadcrumbsComponent {
    public size: TuiSizeL = 'l';
    public items: [{caption: string, routerLink: string}] = [
        {
            caption: 'Главная',
            routerLink: '',
        },
      
    ];
}
