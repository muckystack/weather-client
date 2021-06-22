import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsideService {
  @Output() openAsideSearchModal:EventEmitter<any> = new EventEmitter();

  constructor() { }
}
