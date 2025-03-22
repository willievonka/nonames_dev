import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/legacy';


@Component({
    selector: 'app-tui-input-email',
    imports: [
        ReactiveFormsModule,
        TuiInputModule,
    ],
    templateUrl: './tui-input-email.component.html',
    styleUrl: './tui-input-email.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputEmailComponent {
    public inputForm: FormGroup = new FormGroup({
        inputValue: new FormControl('mail@mail.ru'),
    });
}
