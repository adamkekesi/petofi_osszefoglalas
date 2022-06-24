<template>
  <div>
    <sui-container>
      <h2 is="sui-header" text-align="center">Ars Poetica</h2>
      <sui-segment>
        <sui-list :style="listStyle" bulleted>
          <sui-list-item>Ars Poetica: A téma a költészet, annak értelme, célja, "szabályai". Avagy milyennek kell lennie a jó műnek, milyen erkölcsökkel kell a költőnek rendelkeznie</sui-list-item>
          <sui-list-item>
            Petőfi sokféle Ars Poeticát írt, és ezek közül néhány ellentmond egymásnak
            <sui-list-list>
              <sui-list-item>Romantika, művészi szabadság</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item>Petőfi következő 3 ars poeticájában az a közös, hogy mindegyik a szabadság köré épül</sui-list-item>
        </sui-list>
      </sui-segment>
      <h3 is="sui-header" text-align="center" attached="top">A természet vadvirága</h3>
      <sui-segment attached>
        <sui-list :style="listStyle" bulleted>
          <sui-list-item>Műfaj: dal</sui-list-item>
          <sui-list-item>Agresszív stílus</sui-list-item>
          <sui-list-item>A beszédmód szabadságát hirdeti</sui-list-item>
          <sui-list-item>A helység kalapácsa című művére durva kritika érkezett, Petőfi ezzel a művel válaszolt rá, és a többi kritikusainak</sui-list-item>
          <sui-list-item>
            A versszakok refrénnel zárulnak:
            <br />"A korláttalan természet
            <br />Vadvirága vagyok én"
          </sui-list-item>
          <sui-list-item>Metaforák ellentéteire épül</sui-list-item>
          <sui-list-item>Két korstílust állít szembe egymással: a klasszicizmust és a romantikát</sui-list-item>
        </sui-list>
        <sui-segments horizontal>
          <sui-segment>
            <h4 is="sui-header">Klasszicizmus</h4>
            <sui-list :style="listStyle" bulleted>
              <sui-list-item>Szabályok követése</sui-list-item>
              <sui-list-item>Üvegházban termeszett virághoz hasonlítja</sui-list-item>
            </sui-list>
          </sui-segment>

          <sui-segment>
            <h4 is="sui-header">Romantika</h4>
            <sui-list :style="listStyle" bulleted>
              <sui-list-item>Művészi szabadság</sui-list-item>
              <sui-list-item>Eredetiség</sui-list-item>
              <sui-list-item>Vadvirághoz hasonlítja</sui-list-item>
            </sui-list>
          </sui-segment>
        </sui-segments>
        <sui-list :style="listStyle" bulleted>
          <sui-list-item>Költői eszközök: metafora, túlzás, ellentét</sui-list-item>
          <sui-list-item>Rímképlete: keresztrím</sui-list-item>
        </sui-list>

        <sui-segment aligned="center">
          <pre>
              Mit ugattok, mit haraptok
              Engemet, hitvány ebek!
              Torkotokba, hogy megfúltok,
              Oly kemény koncot vetek.
              Nyirbáljatok üvegházak
              Satnya sarjadékain;
              A korláttalan természet
              Vadvirága vagyok én.
            </pre>

          <pre>
              Nem verték belém tanítók
              Bottal a költészetet,
              Iskolai szabályoknak
              Lelkem sosem engedett.
              Támaszkodjék szabályokra,
              Ki szabadban félve mén.
              A korláttalan természet
              Vadvirága vagyok én.
            </pre>

          <pre>
              Nem virítok számotokra,
              Árva finnyás kóficok!
              Kiknek gyönge, kényes, romlott
              Gyomra mindjárt háborog;
              Van azért, ki ép izléssel
              Üdvezelve jön elém.
              A korláttalan természet
              Vadvirága vagyok én.
            </pre>

          <pre>
              Hát azért nekem örökre
              Szépen békét hagyjatok;
              Ugysem sok gyümölcsü munka:
              Falra borsót hánynotok.
              S kedvetek ha jön kötődni,
              Ugy kapkodjatok felém:
              A természetnek tövíses
              Vadvirága vagyok én.
            </pre>
        </sui-segment>
      </sui-segment>

      <h3 is="sui-header" attached="top" text-align="center">Dalaim</h3>
      <sui-segment attached>
        <sui-list :style="listStyle" bulleted>
          <sui-list-item>A témaválasztás szabadságát hirdeti</sui-list-item>
          <sui-list-item>Nyugodtabb, mint a Természet vadvirága</sui-list-item>
          <sui-list-item>
            Összeszedi, milyen témákban ír verseket, és ezekhez a témákhoz mi adja neki az ihletet
            <sui-list-list>
              <sui-list-item>Egy-egy verstípust egy-egy metafora jellemez, amihez kapcsolódik egy másik metafora, ami az akkori lélekállapotot jellemzi</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item>
            A versszakok szerkezete
            <sui-list-list>
              <sui-list-item>1-4. sor: Az ihlet forrása az adott témájú vershez</sui-list-item>
              <sui-list-item>5-6. sor: Az ihletből születő vers témája, és Petőfi lélekállapota</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item>A 6 versszakban 6 féle verset és lélekállapotot jelenít meg</sui-list-item>
          <sui-list-item>
            A versszakokat ismétlés köti össze: Egy szót, amit az előzőben írt, megemlíti a következőben is
            <sui-list-list>
              <sui-list-item>1-2: ábránd</sui-list-item>
              <sui-list-item>2-3: gond</sui-list-item>
              <sui-list-item>3-4: lyány</sui-list-item>
              <sui-list-item>4-5: pohár</sui-list-item>
              <sui-list-item>5-6: bilincs, lánc (rabság motívumai)</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item>Költői eszközök: metafora, ismétlés</sui-list-item>
          <sui-list-item>Rímképlete: párosrím</sui-list-item>
        </sui-list>
        <sui-segment aligned="center">
          <pre>
            Elmerengek gondolkodva gyakran,
            S nem tudom, hogy mi gondolatom van,
            Átröpűlök hosszában hazámon,
            Át a földön, az egész világon.
            Dalaim, mik ilyenkor teremnek,
            Holdsugári ábrándos lelkemnek.
        </pre>

          <pre>
            A helyett, hogy ábrándoknak élek,
            Tán jobb volna élnem a jövőnek,
            S gondoskodnom... eh, mért gondoskodnám?
            Jó az isten, majd gondot visel rám.
            Dalaim, mik ilyenkor teremnek,
            Pillangói könnyelmű lelkemnek.
        </pre>

          <pre>
            Ha szép lyánnyal van találkozásom,
            Gondomat még mélyebb sírba ásom,
            S mélyen nézek a szép lyány szemébe,
            Mint a csillag csendes tó vizébe.
            Dalaim, mik ilyenkor teremnek,
            Vadrózsái szerelmes lelkemnek.
        </pre>

          <pre>
            Szeret a lyány? iszom örömemben,
            Nem szeret? kell inni keservemben.
            S hol pohár és a pohárban bor van,
            Tarka jókedv születik meg ottan.
            Dalaim, mik ilyenkor teremnek,
            Szivárványi mámoros lelkemnek.
        </pre>

          <pre>
            Oh de míg a pohár van kezemben,
            Nemzeteknek keze van bilincsen,
            S amilyen víg a pohár csengése,
            Olyan bús a rabbilincs csörgése.
            Dalaim, mik ilyenkor teremnek,
            Fellegei bánatos lelkemnek.
        </pre>

          <pre>
            De mit tűr a szolgaságnak népe?
            Mért nem kél föl, hogy láncát letépje?
            Arra vár, hogy isten kegyelméből
            Azt a rozsda rágja le kezéről?
            Dalaim, mik ilyenkor teremnek,
            Villámlási haragos lelkemnek!
        </pre>
        </sui-segment>
      </sui-segment>

      <h3 is="sui-header" attached="top" text-align="center">19. század költői</h3>
      <sui-segment attached>
        <sui-list bulleted :style="listStyle">
          <sui-list-item>A politikai szabadságról szól</sui-list-item>
          <sui-list-item>A költői erkölcsről, a költő feladatáról ír</sui-list-item>
          <sui-list-item>Az igaz költő nem saját fájdalmait beszéli el, hanem a népet vezeti egy jobb kor felé</sui-list-item>
          <sui-list-item>
            A költőt egy látnokhoz, váteszhez hasonlítja
            <sui-list-list>
              <sui-list-item>Költő = lángoszlop</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item>A költőnek a rabságból kell a népet Kánaánba vinnie</sui-list-item>
          <sui-list-item>
            5. versszak: A cél egy olyan társadalom, ahol a következők teljesülnek:
            <sui-list-list>
              <sui-list-item>Egyenlőség gazdaságilag ("Ha majd a bőség kosarából Mindenki egyaránt vehet")</sui-list-item>
              <sui-list-item>Egyenlőség jogilag ("Ha majd a jog asztalánál Mind egyaránt foglal helyet")</sui-list-item>
              <sui-list-item>Műveltség, a felvilágosodás eszméi a gyakorlatban is teljesülnek ("Ha majd a szellem napvilága Ragyog minden ház ablakán")</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item>Ellentétes a Dalaimmal: A Dalaim a témaválasztás szabadságát hirdeti, a 19. század költői pedig megszabja a témát</sui-list-item>
          <sui-list-item>Költői eszközök: metafora, Bibliai motívumok (Mózes, lángoszlop, Kánaán)</sui-list-item>
          <sui-list-item>Rímképlete: párosrím</sui-list-item>
        </sui-list>
        <sui-segment aligned="center">
          <pre>
              Ne fogjon senki könnyelműen
              A húrok pengetésihez!
              Nagy munkát vállal az magára,
              Ki most kezébe lantot vesz.
              Ha nem tudsz mást, mint eldalolni
              Saját fájdalmad s örömed:
              Nincs rád szüksége a világnak,
              S azért a szent fát félretedd.
          </pre>
          <pre>
              Pusztában bujdosunk, mint hajdan
              Népével Mózes bujdosott,
              S követte, melyet isten külde
              Vezérül, a lángoszlopot.
              Ujabb időkben isten ilyen
              Lángoszlopoknak rendelé
              A költőket, hogy ők vezessék
              A népet Kánaán felé.
          </pre>
          <pre>
              Előre hát mind, aki költő,
              A néppel tűzön-vízen át!
              Átok reá, ki elhajítja
              Kezéből a nép zászlaját,
              Átok reá, ki gyávaságból
              Vagy lomhaságból elmarad,
              Hogy, míg a nép küzd, fárad, izzad,
              Pihenjen ő árnyék alatt!
          </pre>
          <pre>
              Vannak hamis próféták, akik
              Azt hirdetik nagy gonoszan,
              Hogy már megállhatunk, mert itten
              Az ígéretnek földe van.
              Hazugság, szemtelen hazugság,
              Mit milliók cáfolnak meg,
              Kik nap hevében, éhen-szomjan,
              Kétségbeesve tengenek.
          </pre>
          <pre>
              Ha majd a bőség kosarából
              Mindenki egyaránt vehet,
              Ha majd a jognak asztalánál
              Mind egyaránt foglal helyet,
              Ha majd a szellem napvilága
              Ragyog minden ház ablakán:
              Akkor mondhatjuk, hogy megálljunk,
              Mert itt van már a Kánaán!
          </pre>
          <pre>
              És addig? addig nincs megnyugvás,
              Addig folyvást küszködni kell. –
              Talán az élet, munkáinkért,
              Nem fog fizetni semmivel,
              De a halál majd szemeinket
              Szelíd, lágy csókkal zárja be,
              S virágkötéllel, selyempárnán
              Bocsát le a föld mélyibe.
          </pre>
        </sui-segment>
      </sui-segment>
    </sui-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class ArsPoeticaView extends Vue {
  private listStyle = { "font-size": "1.11em" };
}
</script>