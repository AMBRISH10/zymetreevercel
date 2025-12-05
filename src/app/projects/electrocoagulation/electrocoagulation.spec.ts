import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrocoagulation } from './electrocoagulation';

describe('Electrocoagulation', () => {
  let component: Electrocoagulation;
  let fixture: ComponentFixture<Electrocoagulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Electrocoagulation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Electrocoagulation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
