import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  images: string[] = [
    'https://via.placeholder.com/400x300?text=Image1',
    'https://via.placeholder.com/400x300?text=Image2',
    'https://via.placeholder.com/400x300?text=Image3',
    'https://via.placeholder.com/400x300?text=Image4'
  ];
  slideWidth = 400; // Larghezza di ogni slide
  translateX = 0;
  currentIndex = 0;
  intervalSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.intervalSubscription = interval(2000).subscribe(() => {
      this.currentIndex++;
      if (this.currentIndex === this.images.length) {
        this.currentIndex = 0;
      }
      this.translateX = -this.currentIndex * this.slideWidth;
    });
  }

  stopSlideShow() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  scrollSlider(direction: string) {
    if (direction === 'left') {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
    } else if (direction === 'right') {
      this.currentIndex++;
      if (this.currentIndex === this.images.length) {
        this.currentIndex = 0;
      }
    }
    this.translateX = -this.currentIndex * this.slideWidth;
    this.stopSlideShow();
    this.startSlideShow();
  }
}
