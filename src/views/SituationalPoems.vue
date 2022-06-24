<template>
  <div>
    <h2 is="sui-header" text-align="center">Helyzetdalok</h2>
    <sui-segment>
      <sui-list bulleted>
        <sui-list-item>Beleéli magát a szerepbe, E/1-ben adja elő</sui-list-item>
      </sui-list>
    </sui-segment>
    <h3 is="sui-header" text-align="center" attached="top">Befordultam a konyhára</h3>
    <sui-segment attached>
      <sui-list>
        <sui-list-item>Műfaja: népies helyzetdal</sui-list-item>
        <sui-list-item>1843 nyarán írta</sui-list-item>
        <sui-list-item>E/1-ben adja elő, vidáman, népies stílusban</sui-list-item>
        <sui-list-item>Egy népi jelenetet mutat be, ahol a főhős belép a konyhába, és meglát egy lányt, akibe azonnal beleszeret</sui-list-item>
        <sui-list-item>Rímképlete: párosrím</sui-list-item>
      </sui-list>
      <sui-segment aligned="center">
        <pre>
          Befordúltam a konyhára,
          Rágyujtottam a pipára...
          Azaz rágyujtottam volna,
          Hogyha már nem égett volna.
        </pre>
        <pre>
          A pipám javában égett,
          Nem is mentem én a végett!
          Azért mentem, mert megláttam,
          Hogy odabenn szép leány van.
        </pre>
        <pre>
          Tüzet rakott eszemadta,
          Lobogott is, amint rakta;
          Jaj de hát még szeme párja,
          Annak volt ám nagy a lángja!
        </pre>
        <pre>
          Én beléptem, ő rámnézett,
          Aligha meg nem igézett!
          Égő pipám kialudott,
          Alvó szívem meggyúladott.
        </pre>
      </sui-segment>
    </sui-segment>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class FamilyPoetryView extends Vue {}
</script>

<style>
</style>