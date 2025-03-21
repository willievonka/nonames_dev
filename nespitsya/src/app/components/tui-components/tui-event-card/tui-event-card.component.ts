import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TuiChipComponent } from '../tui-chip/tui-chip.component';



@Component({
    selector: 'app-tui-event-card',
    imports: [
        CommonModule,
        DatePipe,
        TuiCardLarge,
        TuiAppearance,
        TuiChipComponent,
    ],
    templateUrl: './tui-event-card.component.html',
    styleUrl: './tui-event-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEventCardComponent {
    public eventImage: string = 'https://i.imgur.com/5qSSGHi.jpeg';
    public eventTitle: string = 'Оркестр CAGMO | Концерт при свечах';
    public eventPlace: string = 'Детская филармония';
    public eventDate: Date = new Date ('2025-03-12T12:00:00');
    public eventPrice: string = 'от 1500₽';
    public eventTags: string[] = ['Классическая музыка', 'Саундтрек', 'Неоклассика', 'Шоу', 'Концерт'];
}
