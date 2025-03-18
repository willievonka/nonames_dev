import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiButtonComponent } from './tui-button.component';

describe('TuiButtonComponent', () => {
    let component: TuiButtonComponent;
    let fixture: ComponentFixture<TuiButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TuiButtonComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TuiButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
