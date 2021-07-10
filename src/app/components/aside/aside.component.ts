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
import { Forecast } from 'src/app/models/Forecast.model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  @ViewChild('asideSearchModal') asideSearchModal: ElementRef | any;
  searchLocation: any;
  locationList: any[] | any;
  today: Forecast = {
    Date: '',
    Icon: '',
    Maximum: 0,
    Minimum: 0,
  };

  constructor(
    private _asideServide: AsideService,
    private renderer2: Renderer2,
    private _accuwatherService: AccuweatherService,
    private formBuilder: FormBuilder
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
  search() {
    this._accuwatherService
      .getAutocompleteSearch(this.searchLocation.value.input)
      .subscribe((resp) => {
        console.log(resp);
        this.locationList = resp;
      });
  }

  getForecast(id: String) {
    this._accuwatherService.forecast = [];
    this._accuwatherService.getForecast$(id).subscribe((response: any) => {
      for (let i = 0; i < response.DailyForecasts.length; i++) {
        const element = response.DailyForecasts[i];
        const icon: String =
          element.Day.Icon > 9
            ? `https://developer.accuweather.com/sites/default/files/${element.Day.Icon}-s.png`
            : `https://developer.accuweather.com/sites/default/files/0${element.Day.Icon}-s.png`;
        // this.img = './assets/weather/Shower.png';
        const _forecast: Forecast = {
          Date: element.Date,
          Icon: icon,
          Minimum: Math.round(
            ((parseInt(element.Temperature.Minimum.Value) - 32) * 5) / 9
          ),
          Maximum: Math.round(
            ((parseInt(element.Temperature.Maximum.Value) - 32) * 5) / 9
          ),
        };
        if (i === 0) this.today = _forecast;

        this._accuwatherService.forecast.push(_forecast);
        this._accuwatherService.showForecastEvent.emit(true);
        this.closeModal();
      }
    });
  }
}
