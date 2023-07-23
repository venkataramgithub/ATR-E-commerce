import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeasellerComponent } from './becomeaseller.component';

describe('BecomeasellerComponent', () => {
  let component: BecomeasellerComponent;
  let fixture: ComponentFixture<BecomeasellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeasellerComponent]
    });
    fixture = TestBed.createComponent(BecomeasellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
