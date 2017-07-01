import { BaseRequestOptions, Headers } from '@angular/http';

export class AppRequestOptions extends BaseRequestOptions {

  headers: Headers = new Headers({
      Authorization: `Basic ${btoa('dweitz43:dallasStars43')}`
  });
}
