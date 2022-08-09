// Sets the datetime in website
import { DateTime } from './luxon.min.js';

export default class Time {
  static getDate() {
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    return date;
  }
}
