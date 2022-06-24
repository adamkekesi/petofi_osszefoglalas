<template>
  <div>
    <sui-container>
      <h1
        is="sui-header"
        text-align="center"
        color="red"
        style="font-size: 4em;margin: 10%"
      >404 A keresett oldal nem található</h1>
    </sui-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class NotFoundView extends Vue {}
</script>

<style>
</style>