import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomesellComponent } from './becomesell.component';

describe('BecomesellComponent', () => {
  let component: BecomesellComponent;
  let fixture: ComponentFixture<BecomesellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomesellComponent]
    });
    fixture = TestBed.createComponent(BecomesellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
