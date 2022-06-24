import Event from "@/models/Event";
import DefaultEventDisplay from "@/components/events/DefaultEventDisplay";
import PastDate from "@/models/PastDate";
import NestedEventDisplay from "@/components/events/NestedEventDisplay";
import Location from "@/models/Location";

export default [
  new Event(
    [new Location("Nagykároly")],
    NestedEventDisplay.create(
      "1846 szeptember 8-án megismerte Szendrey Júliát",
      [DefaultEventDisplay.create("Júlia apja ellenezte a kapcsolatot")]
    ),
    DefaultEventDisplay.create("Megismerkedett Szendrey Júliával"),
    DefaultEventDisplay.create("Megismerkedett Szendrey Júliával"),
    new PastDate(1846, 9, 8)
  ),

  new Event(
    [],
    NestedEventDisplay.create(
      "1847 januárjában verset írt hozzá: Reszket a bokor mert...",
      [
        DefaultEventDisplay.create("Azt kérdezi tőle, hogy szereti-e még"),
        DefaultEventDisplay.create("Júlia válasza: 1000-szer, Júlia"),
      ]
    ),
    undefined,
    DefaultEventDisplay.create("Megírta Reszket a bokor, mert című művét"),
    new PastDate(1847, 1)
  ),

  new Event(
    [new Location("Erdőd")],
    NestedEventDisplay.create("1847 szeptember 8-án összeházasodtak", [
      DefaultEventDisplay.create(
        "A mézesheteket Teleki Sándor koltói kastélyában töltötték"
      ),
    ]),
    DefaultEventDisplay.create("Összeházasodott Szendrey Júliával"),
    DefaultEventDisplay.create("Összeházasodott Szendrey Júliával"),
    new PastDate(1847, 9, 8)
  ),

  new Event(
    [],
    NestedEventDisplay.create(
      "1847 február 4-én olvasta a Toldit, és költői levelet írt Aranynak ",
      [
        DefaultEventDisplay.create("Ettől kezdve leveleztek"),
        DefaultEventDisplay.create("Petőfi meg is látogatta"),
      ]
    ),
    DefaultEventDisplay.create("Összebarátkozik Arannyal"),
    DefaultEventDisplay.create("Összebarátkozik Arannyal"),

    new PastDate(1847, 2, 4)
  ),
];
