<template>
  <div>
    <h2 is="sui-header" text-align="center">Térkép</h2>
    <EventDisplay :events="currentEvent"></EventDisplay>
    <sui-container>
      <sui-segment>
        <GmapMap :center="{lat: 46.965719, lng: 19.263204}" :zoom="7" id="map">
          <GmapMarker
            v-for="(loc, key) in locations"
            :key="key"
            :position="loc.location.coords"
            :clickable="true"
            @click="onMarkerClick(loc)"
          />
        </GmapMap>
      </sui-segment>
    </sui-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Location, { getLocations } from "../models/Location";
import { Dictionary } from "vue-router/types/router";
import {
  childhood,
  actorYears,
  firstSuccess,
  badMentalHealth,
  backToPest,
  marriage,
  revolution,
  war
} from "../content/events";
import Event from "../models/Event";
import { Ref } from "vue-property-decorator";
import EventDisplay from "../components/map/EventDisplay.vue";

@Component({ components: { EventDisplay } })
export default class MapView extends Vue {
  private map: any;

  private locations: Dictionary<{ location: Location; events: Event[] }> = {};

  private currentEvent: { location?: Location; events?: Event[] } = {};

  private created() {
    const events = [
      ...childhood,
      ...actorYears,
      ...firstSuccess,
      ...badMentalHealth,
      ...backToPest,
      ...marriage,
      ...revolution,
      ...war
    ];
    events.forEach(event => {
      if (!event.locationContent) {
        return;
      }
      event.locations.forEach(loc => {
        const alreadyDefined = this.locations[loc.name];
        if (alreadyDefined) {
          alreadyDefined.events.push(event);
        } else {
          Vue.set(this.locations, loc.name, { location: loc, events: [event] });
        }
      }, this);
    }, this);
  }

  private onMarkerClick(currentEvent: { location: Location; events: Event[] }) {
    Vue.set(this, "currentEvent", currentEvent);
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: 60em;
  width: 100%;
}
</style>