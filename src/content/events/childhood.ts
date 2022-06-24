import Event from "@/models/Event";
import DefaultEventDisplay from "@/components/events/DefaultEventDisplay";
import PastDate from "@/models/PastDate";
import NestedEventDisplay from "@/components/events/NestedEventDisplay";
import Location from "@/models/Location";

export default [
  new Event(
    [new Location("Kiskőrös")],
    DefaultEventDisplay.create("1823 január 1-jén született Kiskőrösön"),
    DefaultEventDisplay.create("Ekkor született"),
    DefaultEventDisplay.create("Itt született"),
    new PastDate(1823, 1, 1)
  ),

  new Event(
    [],
    DefaultEventDisplay.create(
      "Apja Petrovics István mészárosmester, anyja Hrúz Mária"
    )
  ),

  new Event(
    [new Location("Kiskunfélegyháza")],
    NestedEventDisplay.create("1824 októberében Kiskunfélegyházára költöztek", [
      DefaultEventDisplay.create(
        "Ezt a várost nevezi születési helyének (1848 Szülőföldemen)"
      ),
    ]),
    DefaultEventDisplay.create("Ekkor költöztek Kiskunfélegyházára"),
    DefaultEventDisplay.create("Ide költöztek 1824 októberében"),
    new PastDate(1824, 10)
  ),

  new Event([], DefaultEventDisplay.create("Jó körülmények között éltek")),

  new Event([], DefaultEventDisplay.create("9 iskolában tanult")),

  new Event(
    [new Location("Kiskunfélegyháza")],
    DefaultEventDisplay.create("1828 Kiskunfélegyházán kezdte tanulmányait"),
    DefaultEventDisplay.create("Ekkor kezdte tanulmányait"),
    DefaultEventDisplay.create("Itt kezdte tanulmányait"),
    new PastDate(1828)
  ),

  new Event(
    [new Location("Kecskemét")],
    DefaultEventDisplay.create("3 évig Kecskeméten tanult"),
    DefaultEventDisplay.create("Kecskeméten tanult"),
    DefaultEventDisplay.create("Itt tanult 3 évig"),
    new PastDate(1828),
    new PastDate(1831)
  ),

  new Event(
    [new Location("Szabadszállás")],
    DefaultEventDisplay.create("Fél évig Szabadszálláson tanult"),
    undefined,
    DefaultEventDisplay.create("Itt tanult fél évig")
  ),

  new Event(
    [new Location("Sárszentlőrinc")],
    DefaultEventDisplay.create("Sárszentlőrincen tanult 1831-től 1833-ig"),
    DefaultEventDisplay.create("Sárszentlőrincen tanult"),
    DefaultEventDisplay.create("Itt tanult 1831-től 1833-ig"),
    new PastDate(1831),
    new PastDate(1833)
  ),
  new Event(
    [new Location("Pest")],
    NestedEventDisplay.create("2 évig Pesten tanult", [
      DefaultEventDisplay.create(
        "Az evangélikus, majd a piarista gimnáziumba járt"
      ),
      DefaultEventDisplay.create("Gyenge eredmények"),
    ]),
    DefaultEventDisplay.create("Pesten tanult"),
    DefaultEventDisplay.create("Itt tanult 1833-tól 1835-ig"),
    new PastDate(1833),
    new PastDate(1835)
  ),
  new Event(
    [new Location("Aszód")],
    NestedEventDisplay.create("3 évig Aszódon tanult", [
      DefaultEventDisplay.create("“Itt kezdtem el verseket csinálni”"),
      DefaultEventDisplay.create("“Itt voltam először szerelmes”"),
      DefaultEventDisplay.create("“Itt akartam először színésszé lenni”"),
      DefaultEventDisplay.create("Eseménydús 3 év"),
      DefaultEventDisplay.create("Búcsúbeszédet írt: Búcsúzás 1838"),
    ]),
    DefaultEventDisplay.create("Aszódon tanult"),
    DefaultEventDisplay.create("Itt tanult 1835-től 1838-ig"),
    new PastDate(1835),
    new PastDate(1838)
  ),
  new Event(
    [new Location("Selmecbánya")],
    DefaultEventDisplay.create(
      "A selmeci líceumba iratkozott be 1838 augusztus 1-jén"
    ),
    DefaultEventDisplay.create("Beiratkozott a selmeci líceumba"),
    DefaultEventDisplay.create("Itt iratkozott be a líceumba"),
    new PastDate(1838)
  ),
  new Event(
    [],
    NestedEventDisplay.create("A Nemes Magyar Társaság tagja lett", [
      DefaultEventDisplay.create(
        "Megismerkedett Gvadányi Józseffel, Vörösmartyval, Csokonaival"
      ),
    ])
  ),
  new Event(
    [],
    NestedEventDisplay.create(
      "Az iskolában rosszul teljesített, az apja anyagilag tönkrement",
      [DefaultEventDisplay.create("Szenvedéssel teli időszak következik")]
    )
  ),
];
