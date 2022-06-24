<template>
  <div>
    <sui-container>
      <h2 is="sui-header" text-align="center" size="large">Köszöntöm az oldalamon!</h2>
      <p>Az oldalon Petőfi életéről, költészetéről talál egy összefoglalást. Életének különböző eseményei térképen és időszalagon is fel vannak tüntetve.</p>
    </sui-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class HomeView extends Vue {
  private a: string = "test";
}
</script>

<style lang="scss" scoped>
p {
  font-size: 1.3rem;
  text-align: justify;
}
</style>