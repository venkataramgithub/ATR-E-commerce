import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembarComponent } from './itembar.component';

describe('ItembarComponent', () => {
  let component: ItembarComponent;
  let fixture: ComponentFixture<ItembarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItembarComponent]
    });
    fixture = TestBed.createComponent(ItembarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
