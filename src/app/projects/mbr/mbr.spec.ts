import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mbr } from './mbr';

describe('Mbr', () => {
  let component: Mbr;
  let fixture: ComponentFixture<Mbr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mbr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mbr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
