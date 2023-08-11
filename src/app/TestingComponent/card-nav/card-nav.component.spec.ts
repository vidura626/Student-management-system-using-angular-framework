import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNavComponent } from './card-nav.component';

describe('CardNavComponent', () => {
  let component: CardNavComponent;
  let fixture: ComponentFixture<CardNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNavComponent]
    });
    fixture = TestBed.createComponent(CardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
