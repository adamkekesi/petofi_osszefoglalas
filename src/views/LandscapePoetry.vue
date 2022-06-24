<template>
  <div>
    <sui-container>
      <h2 is="sui-header" text-align="center">Tájköltészet</h2>
      <sui-segment>
        <sui-list bulleted :style="listStyle">
          <sui-list-item>Petőfi tájleíró költeményei szülőföldjéről, az Alföldről szólnak</sui-list-item>
          <sui-list-item>Az Alföld neki a szabadságot jelentette</sui-list-item>
        </sui-list>
      </sui-segment>

      <h3 is="sui-header" text-align="center" attached="top">Az Alföld</h3>
      <sui-segment attached>
        <sui-list bulleted :style="listStyle">
          <sui-list-item>1844-ben írta</sui-list-item>
          <sui-list-item>Műfaj: óda</sui-list-item>
          <sui-list-item>
            Az első 2 versszak kétféle tájat állít szembe: a Kárpátokat és az Alföldet
            <sui-list-list>
              <sui-list-item>Petőfi az Alföldön van otthon</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item>Petőfi pontosan, hitelesen ábrázolja a tájat</sui-list-item>
          <sui-list-item>Magát egy börtönből szabadult sashoz hasonlítja</sui-list-item>
          <sui-list-item>A tájon a sas fog minket végigkísérni</sui-list-item>
          <sui-list-item>Először a távolból mutatja be, majd egyre közelít</sui-list-item>
          <sui-list-item>Tehenek, gémeskút, ménesek, búzamezők, nádasok</sui-list-item>
          <sui-list-item>Keretes vers: Az első két versszak és az utolsó versszak is arról szól, hogy Alföld a szülőföldje és otthona</sui-list-item>
          <sui-list-item>Költői eszközök: metafora</sui-list-item>
          <sui-list-item>Rímképlete: félrím</sui-list-item>
        </sui-list>
        <sui-segment aligned="center">
          <pre>
              Mit nekem te zordon Kárpátoknak
              Fenyvesekkel vadregényes tája!
              Tán csodállak, ámde nem szeretlek,
              S képzetem hegyvölgyedet nem járja.
          </pre>
          <pre>
              Lenn az alföld tengersík vidékin
              Ott vagyok honn, ott az én világom
              Börtönéből szabadúlt sas lelkem,
              Ha a rónák végtelenjét látom.
          </pre>
          <pre>
              Felröpűlök ekkor gondolatban
              Túl a földön felhők közelébe,
              S mosolyogva néz rám a Dunától
              A Tiszáig nyúló róna képe.
          </pre>
          <pre>
              Délibábos ég alatt kolompol
              Kis-Kunságnak száz kövér gulyája;
              Deleléskor hosszu gémü kútnál
              Széles vályu kettős ága várja.
          </pre>
          <pre>
              Méneseknek nyargaló futása
              Zúg a szélben, körmeik dobognak,
              S a csikósok kurjantása hallik
              S pattogása hangos ostoroknak.
          </pre>
          <pre>
              A tanyáknál szellők lágy ölében
              Ringatózik a kalászos búza,
              S a smaragdnak eleven szinével
              A környéket vígan koszorúzza.
          </pre>
          <pre>
              Idejárnak szomszéd nádasokból
              A vadlúdak esti szürkületben,
              És ijedve kelnek légi útra,
              Hogyha a nád a széltől meglebben.
          </pre>
          <pre>
              A tanyákon túl a puszta mélyén
              Áll magányos, dőlt kéményü csárda;
              Látogatják a szomjas betyárok,
              Kecskemétre menvén a vásárra.
          </pre>
          <pre>
              A csárdánál törpe nyárfaerdő
              Sárgul a királydinnyés homokban;
              Odafészkel a visító vércse,
              Gyermekektől nem háborgatottan.
          </pre>
          <pre>
              Ott tenyészik a bús árvalyányhaj
              S kék virága a szamárkenyérnek;
              Hűs tövéhez déli nap hevében
              Megpihenni tarka gyíkok térnek.
          </pre>
          <pre>
              Messze, hol az ég a földet éri,
              A homályból kék gyümölcsfák orma
              Néz, s megettök, mint halvány ködoszlop,
              Egy-egy város templomának tornya. -
          </pre>
          <pre>
              Szép vagy, alföld, legalább nekem szép!
              Itt ringatták bölcsőm, itt születtem.
              Itt borúljon rám a szemfödél, itt
              Domborodjék a sír is fölöttem.
          </pre>
        </sui-segment>
      </sui-segment>

      <h3 is="sui-header" text-align="center" attached="top">Kiskunság</h3>
      <sui-segment attached>
        <sui-list bulleted :style="listStyle">
          <sui-list-item>1848 júniusában írta</sui-list-item>
          <sui-list-item>Optimista vers, mert Júlia ilyenkor volt várandós, Petőfi meg ekkoriban készült a szabadszállási képviselőválasztásra</sui-list-item>
          <sui-list-item>Képzeletben járja be a tájat</sui-list-item>
          <sui-list-item>Itten, amott, szélén - a mozgás érzését keltik</sui-list-item>
          <sui-list-item>Gém, göböly, pásztorkutyák, búza, nád</sui-list-item>
          <sui-list-item>Szélmalom, csárda, kútágas</sui-list-item>
        </sui-list>
        <sui-segment aligned="center">
          <pre>
              Hova szívem, lelkem
              Mindig, mindenhonnan vissza-visszavágyott,
              Ujra láttam végre születésem földét,
              A szép Kiskunságot!
              Bejártam a rónát,
              Melyet átölel a Tisza-Duna karja,
              S ölében, mint kedves mosolygó gyermekét,
              Az anya, úgy tartja.
          </pre>
          <pre>
              Itt vagyok megint a
              Nagyvárosi élet örökös zajában,
              Oh de képzeletem most is odalenn az
              Alföld rónáján van;
              Testi szemeimet
              Behunyom, és lelkem szemeivel nézek,
              S előttem lebegnek szépen gyönyörűn az
              Alföldi vidékek.
          </pre>
          <pre>
              Forró nyárközép van,
              Kapaszkodik a nap fölfelé; sugára
              Mint a lángeső, oly égető özönnel
              Ömlik a pusztára...
              Puszta van körűlem,
              Széles hosszu puszta, el is látok messze,
              Egész odáig, hol a lehajló ég a
              Földdel olvad össze.
          </pre>
          <pre>
              Gazdag legelőkön
              Visz az út keresztül; ott hever a gőböly,
              Rekkenő a hőség, azért nem fogyaszt most
              A kövér mezőböl.
              Cserény oldalánál
              Szundikál a gulyás leterített subán,
              Kutyái is lomhák, nem is pillantanak
              Az útazó után.
          </pre>
          <pre>
              Itten a lapályon
              Egy ér nyúlik végig, meg se' mozdul habja,
              Csak akkor loccsan, ha egy-egy halászmadár
              Szárnyával megcsapja;
              Szép fövény az alja,
              Egészen lelátni sárga fenekére,
              A lusta piócák s a futó bogarak
              Tarka seregére.
          </pre>
          <pre>
              Szélén a sötétzöld
              Káka közt egy-egy gém nyakát nyujtogatja,
              Közbe hosszu orrát üti víz alá a
              Gólyafiak anyja,
              Nagyot nyel, és aztán
              Fölemeli fejét s körülnéz kényesen,
              A vízparton pedig töméntelen bíbic
              Jajgat keservesen.
          </pre>
          <pre>
              Amott egy nagy ágas
              Áll szomorún, egykor kútágas lehetett,
              Mellette a gödör, hanem már beomlott,
              Be is gyepesedett;
              Elmerengve nézi
              Ez a kútágas a távol délibábot,
              Nem tudom, mit nézhet rajta? hisz affélét
              Már eleget látott.
          </pre>
          <pre>
              Ott van a délibáb
              A láthatár szélén... nem kapott egyebet,
              Egy ütöttkopott vén csárdát emelt föl, azt
              Tartja a föld felett.
              Emerre meg gyérül
              A legelő, végre a nyoma is elvész,
              Sárga homokdombok emelkednek, miket
              Épít s dönt a szélvész.
          </pre>
          <pre>
              Nagy sokára egy-egy
              Tanya tünedez fel, boglyák és kazalok,
              Rajtok varju károg, itt-ott egy mogorva
              Komondor csavarog.
              Tenger szántóföldek
              Terjednek szerteszét, rajtok áldott búza,
              Lefelé hajlanak, kalászaikat a
              Nehéz mag lehúzza.
          </pre>
          <pre>
              A zöld búza között
              Piros pipacsok és kék virágok nyilnak,
              Imitt-amott sötét-vörös tüskerózsa,
              Mint egy vérző csillag.
              Közeleg az este,
              Megaranyosodnak a fehér fellegek,
              Szép felhők! mindenik ugy megy el fölöttünk,
              Mint egy tündérrege.
          </pre>
          <pre>
              Végre ott a város,
              Közepén a templom, nagy komoly tornyával,
              Szanaszét a város végén a szélmalmok
              Széles vitorlákkal.
              Ugy szeretek állni
              A szélmalmok előtt! elnézem ezeket,
              Amint vitorlájok hányja, egyre hányja
              A cigánykereket.
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
export default class LandscapePoetryView extends Vue {
  private listStyle = { "font-size": "1.11em" };
}
</script>