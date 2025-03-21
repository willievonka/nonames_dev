import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/legacy';


@Component({
    selector: 'app-tui-input',
    imports: [
        ReactiveFormsModule, 
        TuiInputModule,
    ],
    templateUrl: './tui-input.component.html',
    styleUrl: './tui-input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputComponent {
    public inputForm: FormGroup = new FormGroup({
        inputValue: new FormControl('mail@mail.ru'),
    });
}
