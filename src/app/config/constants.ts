// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
  public readonly API_ENDPOINT: string =
    'https://api.unsplash.com/search/photos?query=';
  readonly API_KEY: string =
    '&client_id=L2KmQHS4Kx0HefKErxWqp9AlPZZ8wDwqYqbUpx1wC1c';
}
