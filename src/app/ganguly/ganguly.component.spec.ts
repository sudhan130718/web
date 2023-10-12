import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangulyComponent } from './ganguly.component';

describe('GangulyComponent', () => {
  let component: GangulyComponent;
  let fixture: ComponentFixture<GangulyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GangulyComponent]
    });
    fixture = TestBed.createComponent(GangulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
