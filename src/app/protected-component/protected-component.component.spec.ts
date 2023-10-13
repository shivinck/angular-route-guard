import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedComponentComponent } from './protected-component.component';

describe('ProtectedComponentComponent', () => {
  let component: ProtectedComponentComponent;
  let fixture: ComponentFixture<ProtectedComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectedComponentComponent]
    });
    fixture = TestBed.createComponent(ProtectedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
