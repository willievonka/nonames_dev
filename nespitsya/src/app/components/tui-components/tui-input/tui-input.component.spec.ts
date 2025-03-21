import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiInputComponent } from './tui-input.component';

describe('TuiInputComponent', () => {
  let component: TuiInputComponent;
  let fixture: ComponentFixture<TuiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuiInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
