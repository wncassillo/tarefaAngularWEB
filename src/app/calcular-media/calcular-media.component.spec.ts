import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularMediaComponent } from './calcular-media.component';

describe('CalcularMediaComponent', () => {
  let component: CalcularMediaComponent;
  let fixture: ComponentFixture<CalcularMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcularMediaComponent]
    });
    fixture = TestBed.createComponent(CalcularMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
