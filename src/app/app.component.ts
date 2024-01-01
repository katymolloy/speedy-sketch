import { Component, OnInit } from '@angular/core';
import { GetImagesService } from './services/get-images.service';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'art-ref';
  // currentImage  = response;
  
}
