import Vue, { CreateElement, VNode } from "vue";
import Component from "vue-class-component";
import {
  childhood,
  actorYears,
  firstSuccess,
  badMentalHealth,
  backToPest,
  marriage,
  revolution,
  war,
} from "@/content/events";
import Event from "@/models/Event";

@Component({})
export default class BiographyView extends Vue {
  public render(h: CreateElement) {
    const title = h(
      "h2",
      {
        class: "ui center aligned header",
      },
      "Életrajz"
    );

    const childhoodPart = this.renderFromEventList(h, childhood, "Gyerekkora");
    const actorYearsPart = this.renderFromEventList(
      h,
      actorYears,
      "Vándorévek"
    );
    const firstSuccessPart = this.renderFromEventList(
      h,
      firstSuccess,
      "Első sikerei"
    );
    const badmentalHealthPart = this.renderFromEventList(
      h,
      badMentalHealth,
      "Rossz lelkiállapotban Szalkszentmártonon"
    );
    const backToPestPart = this.renderFromEventList(
      h,
      backToPest,
      "Újra Pesten"
    );
    const marriagePart = this.renderFromEventList(h, marriage, "Házasság");
    const revolutionPart = this.renderFromEventList(
      h,
      revolution,
      "Forradalom"
    );
    const warPart = this.renderFromEventList(h, war, "Szabadságharc");

    const container = h("sui-container", [
      title,
      childhoodPart,
      actorYearsPart,
      firstSuccessPart,
      badmentalHealthPart,
      backToPestPart,
      marriagePart,
      revolutionPart,
      warPart,
    ]);
    return container;
  }

  private renderFromEventList(
    h: CreateElement,
    eventList: Event[],
    title: string
  ) {
    const events = h(
      "sui-list",
      { props: { bulleted: true }, style: { "font-size": "1.11em" } },
      eventList.map((event) => {
        const listItem = h("sui-list-item", [h(event.content)]);
        return listItem;
      })
    );

    const segment = h(
      "sui-segment",
      {
        props: { padded: true, attached: true },
      },
      [events]
    );

    const titleElement = h(
      "h3",
      {
        class: "ui left aligned header attached top",
      },
      title
    );

    const element = h("div", [titleElement, segment]);
    return element;
  }
}
