import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredCarousel } from './centered-carousel';

describe('CenteredCarousel', () => {
  let component: CenteredCarousel;
  let fixture: ComponentFixture<CenteredCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
