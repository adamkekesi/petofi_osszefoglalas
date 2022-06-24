import Location from "./Location";
import { VueConstructor } from "vue";
import PastDate from "./PastDate";

export default class Event {
  public startDate?: PastDate;

  public endDate?: PastDate;

  public locations: Location[];

  public content: VueConstructor;

  public timelineContent?: VueConstructor;

  public locationContent?: VueConstructor;

  constructor(
    locations: Location[],
    content: VueConstructor,
    timelineContent?: VueConstructor,
    locationContent?: VueConstructor,
    startDate?: PastDate,
    endDate?: PastDate
  ) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.locations = locations;
    this.content = content;
    this.timelineContent = timelineContent;
    this.locationContent = locationContent;
  }
}
