import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCatalog } from './download-catalog';

describe('DownloadCatalog', () => {
  let component: DownloadCatalog;
  let fixture: ComponentFixture<DownloadCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
