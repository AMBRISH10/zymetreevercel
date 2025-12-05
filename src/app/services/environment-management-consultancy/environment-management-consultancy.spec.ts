import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentManagementConsultancy } from './environment-management-consultancy';

describe('EnvironmentManagementConsultancy', () => {
  let component: EnvironmentManagementConsultancy;
  let fixture: ComponentFixture<EnvironmentManagementConsultancy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentManagementConsultancy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentManagementConsultancy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
