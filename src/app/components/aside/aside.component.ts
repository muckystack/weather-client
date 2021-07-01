import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { AccuweatherService } from 'src/app/services/accuweather.service';
import { AsideService } from 'src/app/services/aside.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  @ViewChild('asideSearchModal') asideSearchModal: ElementRef | any;
  searchLocation:any;
  locationList:any[] | any;

  constructor(
    private _asideServide: AsideService,
    private renderer2: Renderer2,
    private _accuwatherService:AccuweatherService,
    private formBuilder:FormBuilder
  ) {

    this.searchLocation = this.formBuilder.group({
      input: '',
    });
  }

  ngOnInit(): void {
    this._asideServide.openAsideSearchModal.subscribe((data) => {
      if (data)
        this.renderer2.setStyle(
          this.asideSearchModal.nativeElement,
          'margin-left',
          '0%'
        );
    });
  }

  closeModal() {
    this.renderer2.setStyle(
      this.asideSearchModal.nativeElement,
      'margin-left',
      '-100%'
    );
  }

  // search places
  search(){
    this._accuwatherService.getAutocompleteSearch(this.searchLocation.value.input).subscribe((resp) =>{
      console.log(resp);
      this.locationList = resp;
    });
  }
}
