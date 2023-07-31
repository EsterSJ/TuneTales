import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliCardComponent } from './publi-card.component';

describe('PubliCardComponent', () => {
  let component: PubliCardComponent;
  let fixture: ComponentFixture<PubliCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PubliCardComponent]
    });
    fixture = TestBed.createComponent(PubliCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
