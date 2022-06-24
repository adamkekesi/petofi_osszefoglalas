<template>
  <div>
    <sui-image class="logo" centered bordered rounded src="images/logo.png"></sui-image>
    <h1 style="font-size: 11rem; font-family: Cardinal; text-align: center">Petõfi Sándor</h1>
    <h2 style="font-size: 4rem" text-align="center" is="sui-header" color="brown">Összefoglalás</h2>
    <sui-menu style="background-color: wheat;  margin-top: 0px;" class="navbar" pointing secondary>
      <router-link class="menu-link" to="/" v-slot="{isExactActive, href, navigate}">
        <a
          is="sui-menu-item"
          :href="href"
          @click="navigate"
          content="Kezdőlap"
          :active="isExactActive"
        ></a>
      </router-link>
      <router-link class="menu-link" to="/biography" v-slot="{isExactActive, href, navigate}">
        <a
          is="sui-menu-item"
          :href="href"
          @click="navigate"
          content="Életrajz"
          :active="isExactActive"
        ></a>
      </router-link>
      <router-link class="menu-link" to="/arspoetica" v-slot="{isExactActive, href, navigate}">
        <a
          is="sui-menu-item"
          :href="href"
          @click="navigate"
          content="Ars Poetica"
          :active="isExactActive"
        ></a>
      </router-link>
      <router-link class="menu-link" to="/landscape" v-slot="{isExactActive, href, navigate}">
        <a
          is="sui-menu-item"
          :href="href"
          @click="navigate"
          content="Tájköltészet"
          :active="isExactActive"
        ></a>
      </router-link>
      <router-link class="menu-link" to="/love-poetry" v-slot="{isExactActive, href, navigate}">
        <a
          is="sui-menu-item"
          :href="href"
          @click="navigate"
          content="Szerelmi költészet"
          :active="isExactActive"
        ></a>
      </router-link>
      <router-link
        class="menu-link"
        to="/revolutionary-poetry"
        v-slot="{isExactActive, href, navigate}"
      >
        <a
          is="sui-menu-item"
          :href="href"
          @click="navigate"
          content="Forradalmi költészet"
          :active="isExactActive"
        ></a>
      </router-link>
      <router-link
        class="menu-link"
        to="/situational-poems"
        v-slot="{isExactActive, href, navigate}"
      >
        <a
          is="sui-menu-item"
          :href="href"
          @click="navigate"
          content="Helyzetdalok"
          :active="isExactActive"
        ></a>
      </router-link>
      <router-link class="menu-link" to="/map" v-slot="{isExactActive, href, navigate}">
        <a
          is="sui-menu-item"
          :href="href"
          @click="navigate"
          content="Térkép"
          :active="isExactActive"
        ></a>
      </router-link>
      <router-link class="menu-link" to="/timeline" v-slot="{isExactActive, href, navigate}">
        <a
          is="sui-menu-item"
          :href="href"
          @click="navigate"
          content="Időszalag"
          :active="isExactActive"
        ></a>
      </router-link>
    </sui-menu>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.menu-link {
  font-size: 2rem;
}

.navbar {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 99;
}

.logo {
  margin: 1rem;
}
</style>
