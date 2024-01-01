import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GetImagesService } from './services/get-images.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ImagePageComponent } from './components/image-page/image-page.component';
import { Constants } from './config/constants';

@NgModule({
  declarations: [AppComponent, MainPageComponent, ImagePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [GetImagesService, Constants],
  bootstrap: [AppComponent],
})
export class AppModule {}
