import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCarousal } from './video-carousal';

describe('VideoCarousal', () => {
  let component: VideoCarousal;
  let fixture: ComponentFixture<VideoCarousal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarousal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCarousal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
