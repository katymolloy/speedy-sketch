import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetImagesService } from 'src/app/services/get-images.service';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css'],
})
export class ImagePageComponent implements OnInit {
  search: string = '';
  index: number = 0;
  time: number = 0;
  images: any;
  currentImage: string = '';
  intervalID: any;

  constructor(
    private route: ActivatedRoute,
    private getImages: GetImagesService
  ) {}

  nextHandler() {
    ++this.index;
    this.currentImage = this.images.results[this.index].urls.regular;
    this.resetInterval();
  }

  backHandler() {
    --this.index;
    this.currentImage = this.images.results[this.index].urls.regular;
    this.resetInterval();
  }

  resetInterval() {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(() => this.displayImage(), this.time);
  }

  displayImage() {
    if (this.images.results[this.index].urls.regular !== undefined) {
      this.currentImage = this.images.results[this.index].urls.regular;
      this.index++;
    } else {
      this.index = 0;
      this.displayImage();
    }
  }

  pauseHandler() {
    clearInterval(this.intervalID);
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.search = params['subject'];
      this.time = params['time'];
    });

    this.getImages.getImage(this.search).subscribe((data) => {
      this.images = data;
      this.currentImage = this.images.results[this.index].urls.regular;

      this.intervalID = setInterval(() => this.displayImage(), this.time);
    });
  }
}
