import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCareProducts } from './home-care-products';

describe('HomeCareProducts', () => {
  let component: HomeCareProducts;
  let fixture: ComponentFixture<HomeCareProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCareProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCareProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
