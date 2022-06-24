<template>
  <div>
    <sui-container>
      <h2 is="sui-header" text-align="center">Szerelmi költészet</h2>
      <sui-segment>
        <sui-list bulleted>
          <sui-list-item>Petőfinek 1846-47 környékén két dolog volt fontos: a szabadság és a szerelem</sui-list-item>
          <sui-list-item>Legtöbb szerelmes versét Szendrey Júliához, későbbi feleségéhez írta</sui-list-item>
        </sui-list>
      </sui-segment>
      <h3 is="sui-header" text-align="center" attached="top">Reszket a bokor, mert</h3>
      <sui-segment attached>
        <sui-list bulleted>
          <sui-list-item>1846 november 20-án jelent meg</sui-list-item>
          <sui-list-item>Műfaj: helyzetdal</sui-list-item>
          <sui-list-item>Miután megismerték egymást a nagykárolyi megyebálon, eltávolodtak egymástól</sui-list-item>
          <sui-list-item>Azért írta ezt a verset, mert nem volt benne biztos, hogy Júlia szereti-e még</sui-list-item>
          <sui-list-item>Az első versszakban Júliát egy gyémánthoz hasonlítja (metafora)</sui-list-item>
          <sui-list-item>
            A harmadik versszakban egymással szembeállítja a nyarat és a telet
            <sui-list-list>
              <sui-list-item>Nyár: Akkor ismerkedtek meg, akkor még szerette Júlia</sui-list-item>
              <sui-list-item>Tél: Most, télen már nem biztos benne, hogy Júlia még mindig szereti</sui-list-item>
            </sui-list-list>
          </sui-list-item>
        </sui-list>
        <sui-segment aligned="center">
          <pre>
              Reszket a bokor, mert
              Madárka szállott rá.
              Reszket a lelkem, mert
              Eszembe jutottál,
              Eszembe jutottál,
              Kicsiny kis leányka,
              Te a nagy világnak
              Legnagyobb gyémántja!
          </pre>
          <pre>
              Teli van a Duna,
              Tán még ki is szalad.
              Szivemben is alig
              Fér meg az indulat.
              Szeretsz, rózsaszálam?
              Én ugyan szeretlek,
              Apád-anyád nálam
              Jobban nem szerethet.
          </pre>
          <pre>
              Mikor együtt voltunk,
              Tudom, hogy szerettél.
              Akkor meleg nyár volt,
              Most tél van, hideg tél.
              Hogyha már nem szeretsz,
              Az isten áldjon meg,
              De ha még szeretsz, úgy
              Ezerszer áldjon meg!
          </pre>
        </sui-segment>
      </sui-segment>

      <h3 is="sui-header" text-align="center" attached="top">Szeptember végén</h3>
      <sui-segment attached>
        <sui-list bulleted>
          <sui-list-item>Nászútjukon, a koltói kastélyban írta</sui-list-item>
          <sui-list-item>Műfaj: elégia</sui-list-item>
          <sui-list-item>
            A vers tájleírással indul, ahol a völgyben lévő virágokat állítja szembe a havas hegycsúccsal (ellentét)
            <sui-list-list>
              <sui-list-item>A völgy az életet jelenti, Petőfi szívét</sui-list-item>
              <sui-list-item>A hegytető az elmúlásra utal</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item>
            A második és harmadik versszakban arról ír, hogy mi lesz akkor, ha ő előbb hal meg, mint Júlia
            <sui-list-list>
              <sui-list-item>Petőfi attól fél, hogy ebben az esetben Júlia nem marad özvegy, hanem újra megházasodik</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item>Rímképlete: keresztrím</sui-list-item>
          <sui-segment aligned="center">
            <pre>
                Még nyílnak a völgyben a kerti virágok,
                Még zöldel a nyárfa az ablak előtt,
                De látod amottan a téli világot?
                Már hó takará el a bérci tetőt.
                Még ifju szivemben a lángsugarú nyár
                S még benne virít az egész kikelet,
                De íme sötét hajam őszbe vegyűl már,
                A tél dere már megüté fejemet.
            </pre>
            <pre>
                Elhull a virág, eliramlik az élet...
                Űlj, hitvesem, űlj az ölembe ide!
                Ki most fejedet kebelemre tevéd le,
                Holnap nem omolsz-e sirom fölibe?
                Oh mondd: ha előbb halok el, tetemimre
                Könnyezve borítasz-e szemfödelet?
                S rábírhat-e majdan egy ifju szerelme,
                Hogy elhagyod érte az én nevemet?
            </pre>
            <pre>
                Ha eldobod egykor az özvegyi fátyolt,
                Fejfámra sötét lobogóul akaszd,
                Én feljövök érte a síri világból
                Az éj közepén, s oda leviszem azt,
                Letörleni véle könyűimet érted,
                Ki könnyeden elfeledéd hivedet,
                S e szív sebeit bekötözni, ki téged
                Még akkor is, ott is, örökre szeret!
            </pre>
          </sui-segment>
        </sui-list>
      </sui-segment>
    </sui-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class LovePoetryView extends Vue {}
</script>