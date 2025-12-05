import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef } from '@angular/core';

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}
@Component({
  selector: 'app-video-carousal',
  imports: [CommonModule],
  templateUrl: './video-carousal.html',
  styleUrl: './video-carousal.css',
})
export class VideoCarousal {
  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;

  currentIndex = 0;
  private autoplayTimeout: any;

  videos: Video[] = [
    {
      id: 1,
      title: 'Ocean Waves',
      description: 'Relaxing ocean waves at sunset',
      url: 'assets/videos/Video1.mp4', 
      thumbnail: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80'
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      description: 'Exploring the peaks',
      url: 'assets/videos/Video2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      id: 3,
      title: 'City Lights',
      description: 'Urban nightlife time-lapse',
      url: 'assets/videos/Video3.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80'
    },
    {
      id: 4,
      title: 'Forest Path',
      description: 'Walking through nature',
      url: 'assets/videos/Video4.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'
    },
    {
      id: 5,
      title: 'Desert Sunset',
      description: 'Golden hour in the dunes',
      url: 'assets/videos/Video5.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80'
    }
  ];

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Start playing the first video after view is initialized
    setTimeout(() => {
      this.playCurrentVideo();
    }, 100);
  }

  ngOnDestroy(): void {
    this.clearAutoplayTimeout();
  }

  private playCurrentVideo(): void {
    const video = this.getCurrentVideo();
    if (video) {
      video.muted = true; // Ensure muted for autoplay
      video.play().catch(err => {
        console.log('Autoplay failed:', err);
      });

      // Set timeout to move to next video after 5 seconds
      this.clearAutoplayTimeout();
      this.autoplayTimeout = setTimeout(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  private nextSlide(): void {
    this.pauseCurrentVideo();
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;

    // Small delay to ensure smooth transition
    setTimeout(() => {
      this.playCurrentVideo();
    }, 100);
  }

  private getCurrentVideo(): HTMLVideoElement | null {
    if (!this.videoPlayers) return null;
    const players = this.videoPlayers.toArray();
    return players[this.currentIndex]?.nativeElement || null;
  }

  private pauseCurrentVideo(): void {
    const video = this.getCurrentVideo();
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }

  private clearAutoplayTimeout(): void {
    if (this.autoplayTimeout) {
      clearTimeout(this.autoplayTimeout);
    }
  }

  getThumbnailStyle(video: Video): any {
    return {
      'background-image': `url(${video.thumbnail})`
    };
  }
}
