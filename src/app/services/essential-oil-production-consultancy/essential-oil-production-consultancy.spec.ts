import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialOilProductionConsultancy } from './essential-oil-production-consultancy';

describe('EssentialOilProductionConsultancy', () => {
  let component: EssentialOilProductionConsultancy;
  let fixture: ComponentFixture<EssentialOilProductionConsultancy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssentialOilProductionConsultancy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssentialOilProductionConsultancy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
