import Event from "@/models/Event";
import DefaultEventDisplay from "@/components/events/DefaultEventDisplay";
import PastDate from "@/models/PastDate";
import NestedEventDisplay from "@/components/events/NestedEventDisplay";
import Location from "@/models/Location";

export default [
  new Event(
    [new Location("Pest")],
    DefaultEventDisplay.create("Az 1848-as forradalom egyik vezetője volt"),
    DefaultEventDisplay.create("48-as forradalom"),
    DefaultEventDisplay.create("48-as forradalom"),
    new PastDate(1848, 3, 15)
  ),

  new Event(
    [],
    DefaultEventDisplay.create(
      "A forradalom után királyellenes verseket írt és szembekerült vezető politikusokkal"
    )
  ),

  new Event(
    [new Location("Szabadszállás")],
    NestedEventDisplay.create(
      "1848 június 15-én a szabadszállási képviselőválasztáson a nép elkergette",
      [
        DefaultEventDisplay.create(
          "Ezért írta 1848 júniusában az Apostol című művét"
        ),
      ]
    ),
    DefaultEventDisplay.create("Szabadszállási tragédia"),
    DefaultEventDisplay.create("Szabadszállási tragédia"),
    new PastDate(1848, 6, 15)
  ),
];
