import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineWaterQualityMonitoring } from './online-water-quality-monitoring';

describe('OnlineWaterQualityMonitoring', () => {
  let component: OnlineWaterQualityMonitoring;
  let fixture: ComponentFixture<OnlineWaterQualityMonitoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineWaterQualityMonitoring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineWaterQualityMonitoring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
