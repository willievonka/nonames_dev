import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiBreadcrumbsComponent } from "../../tui-components/tui-breadcrumbs/tui-breadcrumbs.component";
import { TuiSecondaryButtonComponent } from "../../tui-components/tui-secondary-button/tui-secondary-button.component";

@Component({
    selector: 'app-cities-page',
    imports: [
    CommonModule,
    TuiBreadcrumbsComponent,
    TuiSecondaryButtonComponent
],
    templateUrl: './cities.page.component.html',
    styleUrl: './cities.page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesPageComponent {
  public breadcrumbsItems: Array<{ caption: string, routerLink: string }> = [
    { caption: 'Главная', routerLink: '/home' },
    { caption: 'Города', routerLink:'/home/cities'}
];

public cities: TuiSecondaryButtonComponent[] = [
  {
    buttonText: 'Москва',
    buttonIconLeft:'@tui.building-2',
    buttonIconRight:'',
    size:'xl',
  },
  {
    buttonText: 'Москва',
    buttonIconLeft:'@tui.building-2',
    buttonIconRight:'',
    size:'xl',
  },
]
}
