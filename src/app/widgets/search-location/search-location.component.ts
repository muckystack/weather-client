import { AsideService } from './../../services/aside.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css'],
})
export class SearchLocationComponent implements OnInit {
  constructor(private _asideServide:AsideService) {}

  ngOnInit(): void {}

  showAsideSearchModal() {
    console.log('Funciona');
    this._asideServide.openAsideSearchModal.emit(true);
  }
}
