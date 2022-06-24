<template>
  <div>
    <h2 is="sui-header" text-align="center">Időszalag</h2>
    <sui-segment ref="segment">
      <EventDisplay
        v-for="(popper, i) in poppers"
        :key="100+i"
        :events="popper"
        :style="popper.show?'':'visibility: hidden'"
        ref="popperComponents"
      ></EventDisplay>
      <img
        src="/images/timeline-marker.png"
        v-for="(marker, i) in markers"
        :key="i"
        :style="marker.style"
        @click="onMarkerClick(i)"
        ref="markerComponents"
      />
      <img id="timeline" ref="timeline" src="/images/timeline.png" />
    </sui-segment>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Ref } from "vue-property-decorator";
import jquery from "jquery";
import Event from "../models/Event";
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
import PastDate from "../models/PastDate";
import EventDisplay from "../components/timeline/EventDisplay";
import { createPopper } from "@popperjs/core";

@Component({ components: { EventDisplay } })
export default class Timeline extends Vue {
  @Ref()
  private timeline!: HTMLImageElement;

  @Ref()
  private segment!: Vue;

  @Ref()
  private popperComponents!: Vue[];

  @Ref()
  private markerComponents!: HTMLElement[];

  private times: Dictionary<{
    events: Event[];
    startDate: PastDate;
    endDate?: PastDate;
  }> = {};

  private markers: Array<{ style: any }> = [];

  private poppers: Array<{
    events: Event[];
    startDate: PastDate;
    endDate?: PastDate;
    show: boolean;
  }> = [];

  private initMarkers() {
    Vue.set(this, "markers", []);
    Vue.set(this, "poppers", []);
    const segment = jquery(this.segment.$el);
    const timeline = jquery(this.timeline);
    const width = timeline.width()!;
    const top = timeline.offset()!.top - segment.offset()!.top + "px";
    const yearHop = width / 27;
    const monthHop = yearHop / 12;
    const dayHop = monthHop / 30;
    const timelineLeft = timeline.offset()!.left;
    Object.keys(this.times).forEach(key => {
      const time = this.times[key];
      const startDate = time.startDate;
      const left =
        (startDate.year - 1823) * yearHop +
        (startDate.month || 0) * monthHop +
        (startDate.day || 0) * dayHop +
        timelineLeft +
        "px";
      this.markers.push({ style: { position: "absolute", top, left } });
      this.poppers.push({ ...time, show: false });
    }, this);
    Vue.nextTick(
      (() => {
        this.markerComponents.forEach((marker, i) => {
          createPopper(marker, this.popperComponents[i].$el as any, {
            placement: "top"
          });
        }, this);
      }).bind(this)
    );
  }

  private mounted() {
    this.initMarkers();
    const onresize = window.onresize;
    const self = this;
    window.onresize = function(ev: any) {
      onresize?.call(window, ev);
      self.initMarkers();
    };
  }

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
      if (event.startDate && event.timelineContent) {
        var key: string;
        if (event.endDate) {
          key = event.startDate.format() + " - " + event.endDate.format();
        } else {
          key = event.startDate.format();
        }
        const alreadyDefined = this.times[key];
        if (alreadyDefined) {
          alreadyDefined.events.push(event);
        } else {
          Vue.set(this.times, key, {
            events: [event],
            startDate: event.startDate,
            endDate: event.endDate
          });
        }
      }
    }, this);
  }

  private onMarkerClick(index: number) {
    this.poppers[index].show = !this.poppers[index].show;
  }
}
</script>

<style lang="scss">
#timeline {
  width: 100%;
  margin-top: 20vh;
  margin-bottom: 20%;
  height: 15px;
}
</style>