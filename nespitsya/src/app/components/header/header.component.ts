import { Component } from '@angular/core';
import { TuiButtonComponent } from '../tui-button/tui-button.component';
import { TuiInputSearchComponent } from '../tui-input-search/tui-input-search.component';


@Component({
  selector: 'app-header',
  imports: [TuiInputSearchComponent, TuiButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
