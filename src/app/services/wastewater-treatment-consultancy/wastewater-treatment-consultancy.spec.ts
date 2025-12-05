import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WastewaterTreatmentConsultancy } from './wastewater-treatment-consultancy';

describe('WastewaterTreatmentConsultancy', () => {
  let component: WastewaterTreatmentConsultancy;
  let fixture: ComponentFixture<WastewaterTreatmentConsultancy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WastewaterTreatmentConsultancy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WastewaterTreatmentConsultancy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
