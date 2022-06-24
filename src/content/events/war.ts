import Event from "@/models/Event";
import DefaultEventDisplay from "@/components/events/DefaultEventDisplay";
import PastDate from "@/models/PastDate";
import NestedEventDisplay from "@/components/events/NestedEventDisplay";
import Location from "@/models/Location";

export default [
  new Event(
    [],
    NestedEventDisplay.create("A szabadságharcban százados volt", [
      DefaultEventDisplay.create("Alakulata nem harcolt"),
    ])
  ),

  new Event(
    [new Location("Debrecen")],
    DefaultEventDisplay.create(
      "1848 december 15-én született fia, Zoltán Debrecenben"
    ),
    DefaultEventDisplay.create("Fia született, Zoltán"),
    DefaultEventDisplay.create("Fia született, Zoltán"),
    new PastDate(1848, 12, 15)
  ),

  new Event(
    [],
    NestedEventDisplay.create(
      "1849 januárjában jelentkezett Bem tábornok seregébe",
      [DefaultEventDisplay.create("Bem távol akarta tartani a harcoktól")]
    ),
    DefaultEventDisplay.create("Jelentkezett Bem seregébe"),
    DefaultEventDisplay.create("Jelentkezett Bem seregébe"),
    new PastDate(1849, 1)
  ),

  new Event(
    [],
    DefaultEventDisplay.create("Anyagi gondjai voltak, a szülei is meghaltak")
  ),

  new Event(
    [],
    DefaultEventDisplay.create(
      "1849 július 25-én csatlakozott Bem seregéhez, de nem volt felszerelése"
    ),

    DefaultEventDisplay.create("Csatlakozott Bem seregébe"),
    undefined,
    new PastDate(1849, 7, 25)
  ),

  new Event(
    [new Location("Segesvár")],
    DefaultEventDisplay.create(
      "A segesvári csatában így vett rész, és 1849 július 31-én eltűnt"
    ),
    DefaultEventDisplay.create("A segesvári csatában eltűnt"),
    DefaultEventDisplay.create("A segesvári csatában eltűnt"),
    new PastDate(1849, 7, 31)
  ),
];
