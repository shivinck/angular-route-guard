import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicComponentComponent } from './public-component.component';

describe('PublicComponentComponent', () => {
  let component: PublicComponentComponent;
  let fixture: ComponentFixture<PublicComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicComponentComponent]
    });
    fixture = TestBed.createComponent(PublicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
