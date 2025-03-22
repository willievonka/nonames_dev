import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/legacy';


@Component({
    selector: 'app-tui-input-text',
    imports: [
        ReactiveFormsModule,
        TuiInputModule
    ],
    templateUrl: './tui-input-text.component.html',
    styleUrl: './tui-input-text.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputTextComponent {
    public inputForm: FormGroup = new FormGroup({
        inputValue: new FormControl('mail@mail.ru'),
    });
}
