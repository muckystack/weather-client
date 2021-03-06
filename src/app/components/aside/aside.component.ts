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
import { CurrentConditions, Forecast } from 'src/app/models/Forecast.model';
import { convertDate, fahrenheitToCelsius, urlImg } from 'src/app/utils/util.utils';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  @ViewChild('asideSearchModal') asideSearchModal: ElementRef | any;
  searchLocation: any;
  locationList: any[] | any;
  today: CurrentConditions = {
    Date: '',
    Icon: '',
    Temperature: 0,
    celsius: 0,
    WeatherText: '',
    Place: '',
    windSpeedKmH: 0,
    windSpeedMiH: 0,
    humidity: 0,
    visibilityKm: 0,
    visibilityMi: 0,
    pressureMb: 0,
    pressureInHg: 0,
  };
  isFahrenheit: boolean = false;

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
    this.getLocation();

    this.changeMetric();
  }

  getLocation() {
    this._accuwatherService.getPosition().then((pos) => {
      // this.latitude = pos.lat;
      // this.longitude = pos.lng;
      console.log(pos);
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
        this.locationList = resp;
      });
  }

  getForecast(id: String, LocalizedName: String) {
    this._accuwatherService.forecast = [];
    this._accuwatherService.getForecast$(id).subscribe((response: any) => {
      for (let i = 0; i < response.DailyForecasts.length; i++) {
        const element = response.DailyForecasts[i];
        const icon: String = urlImg(element.Day.Icon);
        // this.img = './assets/weather/Shower.png';
        const _forecast: Forecast = {
          Date: convertDate(element.Date),
          Icon: icon,
          Minimum: element.Temperature.Minimum.Value,
          Maximum: element.Temperature.Maximum.Value,
          minCelsius: fahrenheitToCelsius(element.Temperature.Minimum.Value),
          maxCelsius: fahrenheitToCelsius(element.Temperature.Maximum.Value),
        };
        if (i === 0) {
          this.today.Place = LocalizedName;
          this._accuwatherService
            .getCurrentConditions$(id)
            .subscribe((responseCurrent: any) => {
              this.today.Date = convertDate(
                responseCurrent[0].LocalObservationDateTime
              );
              this.today.Icon = urlImg(responseCurrent[0].WeatherIcon);
              this.today.Temperature  = Math.round(responseCurrent[0].Temperature.Imperial.Value);
              this.today.celsius      = Math.round(responseCurrent[0].Temperature.Metric.Value);
              this.today.WeatherText  = responseCurrent[0].WeatherText;
              this.today.windSpeedKmH = Math.round(responseCurrent[0].Wind.Speed.Metric.Value);
              this.today.windSpeedMiH = Math.round(responseCurrent[0].Wind.Speed.Imperial.Value);
              this.today.humidity     = Math.round(responseCurrent[0].RelativeHumidity);
              this.today.visibilityKm = Math.round(responseCurrent[0].Visibility.Metric.Value);
              this.today.visibilityMi = Math.round(responseCurrent[0].Visibility.Imperial.Value);
              this.today.pressureMb   = Math.round(responseCurrent[0].Pressure.Metric.Value);
              this.today.pressureInHg = Math.round(responseCurrent[0].Pressure.Imperial.Value);
            });
          this._accuwatherService.currentConditions.push(this.today);
        }

        this._accuwatherService.forecast.push(_forecast);
        this._accuwatherService.showForecastEvent.emit(true);
        this.closeModal();
      }
    });
  }

  changeMetric(){
    this._accuwatherService.isFahrenheit.subscribe((unitMetric) => {
      this.isFahrenheit = unitMetric;
    });
  }
}
