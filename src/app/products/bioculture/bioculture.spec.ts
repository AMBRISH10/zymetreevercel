import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bioculture } from './bioculture';

describe('Bioculture', () => {
  let component: Bioculture;
  let fixture: ComponentFixture<Bioculture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bioculture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bioculture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
