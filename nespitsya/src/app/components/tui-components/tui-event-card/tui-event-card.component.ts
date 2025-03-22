import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TuiAppearance } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TuiChipComponent } from '../tui-chip/tui-chip.component';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-tui-event-card',
    imports: [
        CommonModule,
        DatePipe,
        RouterLink,
        TuiCardLarge,
        TuiAppearance,
        TuiChipComponent,
    ],
    templateUrl: './tui-event-card.component.html',
    styleUrl: './tui-event-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEventCardComponent {
    public image: string = 'https://i.imgur.com/5qSSGHi.jpeg';
    public title: string = 'Оркестр CAGMO | Концерт при свечах';
    public place: string = 'Детская филармония';
    public date: Date = new Date ('2025-03-12T12:00:00');
    public price: string = 'от 1500₽';
    public tags: string[] = ['Классическая музыка', 'Саундтрек', 'Неоклассика', 'Шоу', 'Концерт'];
    public routerLink: string = '';
}
