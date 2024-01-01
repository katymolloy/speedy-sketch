import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private router: Router, private fb: FormBuilder) {}
  refDetails = this.fb.group({
    subject: ['', [Validators.required]],
    time: [0, [Validators.required]],
  });

  handleSubmit() {
    this.router.navigate(['/images'], { queryParams: this.refDetails.value });
  }
}
