import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root',
})
export class GetImagesService {



  constructor(private constants: Constants, private http: HttpClient) {}

  getImage(search: string): Observable<any> {
    const url = `${this.constants.API_ENDPOINT}${search}${this.constants.API_KEY}`;
    console.log(url)

    return this.http.get<any>(url);
  }
}
