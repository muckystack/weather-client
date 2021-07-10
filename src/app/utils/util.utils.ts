import * as moment from 'moment';

export function convertDate(date: any): String {
  moment.locale('es');
  return moment(date).format('ddd DD MMM').toString();
}

export function urlImg(img: any): String {
  return img > 9
    ? `https://developer.accuweather.com/sites/default/files/${img}-s.png`
    : `https://developer.accuweather.com/sites/default/files/0${img}-s.png`;
}
