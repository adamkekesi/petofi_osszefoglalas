import Vue, { CreateElement } from "vue";
import Component from "vue-class-component";
import PastDate from "@/models/PastDate";
import Event from "@/models/Event";
import { Prop } from "vue-property-decorator";
import { VNode } from "vue/types/umd";

@Component({})
export default class EventDisplay extends Vue {
  @Prop()
  private events!: {
    events: Event[];
    startDate: PastDate;
    endDate?: PastDate;
  };

  private get show() {
    return this.events != null && this.events.events != null;
  }

  private render(h: CreateElement) {
    const content = this.show
      ? h("div", [
          ...this.events.events.map((e, i) => {
            var time: VNode | null = null;
            if (e.startDate) {
              if (e.endDate) {
                time = h(
                  "h3",
                  e.startDate.format() + " - " + e.endDate.format()
                );
              } else {
                time = h("h3", e.startDate.format());
              }
            }
            const eventSegment = h("sui-segment", { key: i }, [
              time,
              time ? h("br") : null,
              h(e.timelineContent),
            ]);
            return eventSegment;
          }),
        ])
      : null;

    const segment = h(
      "sui-segment",
      {
        props: { floated: "right" },
        style: { width: "18em" },
      },
      [content]
    );

    const root = h("div", [segment]);
    return root;
  }
}
