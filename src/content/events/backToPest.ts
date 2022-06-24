import Event from "@/models/Event";
import DefaultEventDisplay from "@/components/events/DefaultEventDisplay";
import PastDate from "@/models/PastDate";
import NestedEventDisplay from "@/components/events/NestedEventDisplay";
import Location from "@/models/Location";

export default [
  new Event(
    [new Location("Pest")],
    NestedEventDisplay.create(
      "1846 május 22 költői levelet írt Várady Antalnak",
      [DefaultEventDisplay.create("Jobb lett a hangulata")]
    ),
    DefaultEventDisplay.create("Levél Várady Antalhoz"),
    DefaultEventDisplay.create("Levél Várady Antalhoz"),
    new PastDate(1846, 5, 22)
  ),

  new Event(
    [new Location("Pest")],
    DefaultEventDisplay.create(
      "Visszatért Pestre, szervezni kezdte a Tízek Társaságát"
    ),
    undefined,
    DefaultEventDisplay.create("Szervezni kezdte a Tízek Társaságát")
  ),
];
