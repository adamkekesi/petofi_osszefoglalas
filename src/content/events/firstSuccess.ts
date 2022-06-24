import Event from "@/models/Event";
import DefaultEventDisplay from "@/components/events/DefaultEventDisplay";
import PastDate from "@/models/PastDate";
import NestedEventDisplay from "@/components/events/NestedEventDisplay";
import Location from "@/models/Location";

export default [
  new Event(
    [new Location("Pest")],
    NestedEventDisplay.create(
      "1844 februárjában összeírta verseit, Pestre ment, hogy kiadattassa",
      [
        DefaultEventDisplay.create(
          "Vörösmarty segítségével a Nemzeti Kör kiadta"
        ),
      ]
    ),
    DefaultEventDisplay.create("Pestre indult, hogy kiadattassa verseit"),
    DefaultEventDisplay.create("Pestre indult, hogy kiadattassa verseit"),
    new PastDate(1844, 2)
  ),

  new Event(
    [new Location("Pest")],
    DefaultEventDisplay.create(
      "1844 július 1-jén segédszerkesztő lett a Pesti Divatlapnál"
    ),
    DefaultEventDisplay.create("Segédszerkesztő lett a Pesti Divatlapnál"),
    DefaultEventDisplay.create("Segédszerkesztő lett a Pesti Divatlapnál"),
    new PastDate(1844, 7, 1)
  ),

  new Event(
    [new Location("Pest")],
    DefaultEventDisplay.create(
      "1844 októberben kiadja A helység kalapácsa művét"
    ),
    DefaultEventDisplay.create("Megjelent A helység kalapácsa"),
    DefaultEventDisplay.create("Megjelent A helység kalapácsa"),
    new PastDate(1844, 10)
  ),

  new Event(
    [new Location("Pest")],
    DefaultEventDisplay.create(
      "Elkezdte a János vitézt, ami 1845 március 6-án jelent meg"
    ),
    DefaultEventDisplay.create("Megjelent a János vitéz"),
    DefaultEventDisplay.create("Megjelent a János vitéz"),
    new PastDate(1845, 3, 6)
  ),

  new Event(
    [new Location("Pest")],
    NestedEventDisplay.create(
      "Megismerkedett Csapó Etelkével, aki később, 1845 január 7-én meghalt",
      [
        DefaultEventDisplay.create(
          "Neki írta a Cipruslombok Etelke sírjáról művét (1845 márc)"
        ),
      ]
    ),
    DefaultEventDisplay.create("Meghalt Csapó Etelke"),
    DefaultEventDisplay.create("Meghalt Csapó Etelke"),
    new PastDate(1845, 1, 7)
  ),

  new Event(
    [new Location("Pest")],
    DefaultEventDisplay.create(
      "1845 március végén kilépett a Pesti Divatlapból"
    ),
    DefaultEventDisplay.create("Kilépett a Pesti Divatlapból"),
    DefaultEventDisplay.create("Kilépett a Pesti Divatlapból"),
    new PastDate(1845, 3)
  ),

  new Event(
    [
      new Location("Eperjes"),
      new Location("Késmárk"),
      new Location("Igló"),
      new Location("Rozsnyó"),
      new Location("Rimaszombat"),
    ],
    NestedEventDisplay.create("1845 április 1-jén felvidéki körútra megy", [
      DefaultEventDisplay.create("Úti jegyzetek 1845 nyara"),
    ]),
    DefaultEventDisplay.create("Felvidéki körút"),
    DefaultEventDisplay.create("Felvidéki körút"),
    new PastDate(1845, 3)
  ),
];
