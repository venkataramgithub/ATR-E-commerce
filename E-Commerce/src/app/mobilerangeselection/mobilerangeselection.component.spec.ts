import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilerangeselectionComponent } from './mobilerangeselection.component';

describe('MobilerangeselectionComponent', () => {
  let component: MobilerangeselectionComponent;
  let fixture: ComponentFixture<MobilerangeselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilerangeselectionComponent]
    });
    fixture = TestBed.createComponent(MobilerangeselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
