import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ImagePageComponent } from './components/image-page/image-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'images', component: ImagePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
