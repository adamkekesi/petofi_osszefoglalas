import Event from "@/models/Event";
import DefaultEventDisplay from "@/components/events/DefaultEventDisplay";
import PastDate from "@/models/PastDate";
import NestedEventDisplay from "@/components/events/NestedEventDisplay";
import Location from "@/models/Location";

export default [
  new Event(
    [new Location("Selmec"), new Location("Pest")],
    NestedEventDisplay.create(
      "Elindult gyalog Pestre februárban, és márciusban érkezett meg",
      [DefaultEventDisplay.create("Nemzeti Színházban lett kisegítő")]
    ),
    DefaultEventDisplay.create("Pestre indult gyalog"),
    DefaultEventDisplay.create("Pestre indult gyalog"),
    new PastDate(1839, 2),
    new PastDate(1839, 3)
  ),

  new Event(
    [new Location("Ostffyasszonyfa")],
    DefaultEventDisplay.create(
      "Májustól szeptemberig Ostffyasszonyfán élt egyik rokonánál"
    ),
    DefaultEventDisplay.create("Ostffyasszonyfán élt"),
    DefaultEventDisplay.create("Ostffyasszonyfán élt"),
    new PastDate(1839, 5),
    new PastDate(1839, 9)
  ),

  new Event(
    [new Location("Sopron")],
    DefaultEventDisplay.create(
      "1839 szeptember 6-án katona lett a császári hadseregben"
    ),
    DefaultEventDisplay.create("Katona lett"),
    DefaultEventDisplay.create("Katona lett"),
    new PastDate(1839, 5, 6)
  ),

  new Event(
    [new Location("Zágráb")],
    NestedEventDisplay.create("Nem bírta a katonaságot, megbetegedett", [
      DefaultEventDisplay.create("Zágrábban ápolták"),
    ]),
    undefined,
    DefaultEventDisplay.create("Megbetegedett, és itt ápolták")
  ),

  new Event(
    [new Location("Sopron")],
    DefaultEventDisplay.create("1841-ben Sopronban elbocsátották a seregből"),
    DefaultEventDisplay.create("Elbocsátották a seregből"),
    DefaultEventDisplay.create("Elbocsátották a seregből"),
    new PastDate(1841)
  ),

  new Event(
    [new Location("Pápa")],
    DefaultEventDisplay.create(
      "Pápára megy, Orlai Petrics Soma vendégül látja"
    ),
    undefined,
    DefaultEventDisplay.create("Orlainál vendégeskedik")
  ),

  new Event(
    [new Location("Ozora")],
    DefaultEventDisplay.create(
      "1841 június végétől szeptemberig vándorszínész volt Ozorán"
    ),
    DefaultEventDisplay.create("Vándorszínész Ozorán"),
    DefaultEventDisplay.create("Vándorszínész lett"),
    new PastDate(1841, 6),
    new PastDate(1841, 9)
  ),

  new Event(
    [new Location("Pápa")],
    NestedEventDisplay.create("1841 októberétől 1842 októberéig Pápán tanult", [
      DefaultEventDisplay.create("Megismerkedett Jókaival"),
      DefaultEventDisplay.create(
        "Ekkor született első sikeres verse, A borozó, ami 1842 május 21-én jelent meg az Athenaeumban"
      ),
    ]),
    DefaultEventDisplay.create("Pápán tanult"),
    DefaultEventDisplay.create("Itt tanult"),
    new PastDate(1841, 10),
    new PastDate(1842, 10)
  ),

  new Event(
    [new Location("Komárom")],
    DefaultEventDisplay.create("1842 augusztusában Jókainál töltött egy hetet"),
    DefaultEventDisplay.create("Jókainál töltött egy hetet"),
    DefaultEventDisplay.create("Jókainál töltött egy hetet"),
    new PastDate(1842, 8)
  ),

  new Event(
    [new Location("Székesfehérvár")],
    DefaultEventDisplay.create(
      "Újra színész lett 1842 novemberében Székesfehérváron"
    ),
    DefaultEventDisplay.create("Székesfehérváron színész lett"),
    DefaultEventDisplay.create("Színész lett"),
    new PastDate(1842, 11),
    new PastDate(1843, 1)
  ),

  new Event(
    [new Location("Pozsony")],
    NestedEventDisplay.create(
      "Pozsonyba gyalogolt, és az Országgyűlési Tudósításokat másolta",
      [DefaultEventDisplay.create("Itt írta a Távolbólt")]
    ),
    DefaultEventDisplay.create("Pozsonyba ment"),
    DefaultEventDisplay.create("Országgyűlési Tudósításokat másolta"),
    new PastDate(1843, 4),
    new PastDate(1843, 6)
  ),
  new Event(
    [new Location("Pest")],
    DefaultEventDisplay.create("Pestre ment, a Külföldi regénytárt fordította"),
    undefined,
    DefaultEventDisplay.create("A Külföldi regénytárt fordította")
  ),

  new Event(
    [
      new Location("Debrecen"),
      new Location("Diószeg"),
      new Location("Székelyhíd"),
    ],
    DefaultEventDisplay.create(
      "1843 őszén újra színész lett Debrecenben, Diószegen, majd Székelyhídon"
    ),
    DefaultEventDisplay.create("Újra színész lett"),
    DefaultEventDisplay.create("Újra színész lett"),
    new PastDate(1843, 9)
  ),

  new Event(
    [new Location("Debrecen")],
    NestedEventDisplay.create(
      "November végén megbetegedett, visszament Debrecenbe",
      [DefaultEventDisplay.create("Végleg felhagyott a színészkedéssel")]
    ),
    DefaultEventDisplay.create("Megbetegedett, visszament Debrecenbe"),
    DefaultEventDisplay.create("Megbetegedett, visszament Debrecenbe"),
    new PastDate(1843, 11)
  ),
];
