import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCare } from './personal-care';

describe('PersonalCare', () => {
  let component: PersonalCare;
  let fixture: ComponentFixture<PersonalCare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalCare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
