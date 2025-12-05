import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityChemicals } from './speciality-chemicals';

describe('SpecialityChemicals', () => {
  let component: SpecialityChemicals;
  let fixture: ComponentFixture<SpecialityChemicals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialityChemicals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialityChemicals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
