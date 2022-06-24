

<script lang="ts">
import Vue, { CreateElement, VNode } from "vue";
import Component from "vue-class-component";
import Location from "../../models/Location";
import Event from "../../models/Event";
import { Prop } from "vue-property-decorator";

@Component({})
export default class EventDisplay extends Vue {
  @Prop({ default: null })
  private events!: { location: Location; events: Event[] };

  private get show() {
    return this.events != null && this.events.location != null;
  }

  private render(h: CreateElement) {
    const content = this.show
      ? h("div", [
          h("h3", { class: "ui header" }, this.events.location.name),
          ...this.events.events.map((e, i) => {
            var time: VNode | null = null;
            if (e.startDate) {
              if (e.endDate) {
                time = h(
                  "sui-label",
                  e.startDate.format() + " - " + e.endDate.format()
                );
              } else {
                time = h("sui-label", e.startDate.format());
              }
            }
            const eventSegment = h("sui-segment", { key: i }, [
              time,
              time ? h("br") : null,
              h(e.locationContent)
            ]);
            return eventSegment;
          })
        ])
      : h("div", "Kattintson a térképen egy jelölésre!");

    const segment = h(
      "sui-segment",
      {
        props: { floated: "right" },
        style: { width: "18em" }
      },
      [content]
    );

    const root = h("div", [segment]);
    return root;
  }
}
</script>
