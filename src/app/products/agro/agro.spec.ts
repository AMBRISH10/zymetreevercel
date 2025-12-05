import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agro } from './agro';

describe('Agro', () => {
  let component: Agro;
  let fixture: ComponentFixture<Agro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
