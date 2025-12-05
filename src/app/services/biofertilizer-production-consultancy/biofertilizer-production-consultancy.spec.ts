import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiofertilizerProductionConsultancy } from './biofertilizer-production-consultancy';

describe('BiofertilizerProductionConsultancy', () => {
  let component: BiofertilizerProductionConsultancy;
  let fixture: ComponentFixture<BiofertilizerProductionConsultancy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiofertilizerProductionConsultancy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiofertilizerProductionConsultancy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
