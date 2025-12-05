import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalsForCleaning } from './chemicals-for-cleaning';

describe('ChemicalsForCleaning', () => {
  let component: ChemicalsForCleaning;
  let fixture: ComponentFixture<ChemicalsForCleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemicalsForCleaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemicalsForCleaning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
