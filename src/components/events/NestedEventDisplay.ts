import { CreateElement, VueConstructor } from "vue/types/umd";
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class NestedEventDisplay extends Vue {
  protected title: string = "";
  protected childrenEvents: VueConstructor[] = [];

  public static create(title: string, children: VueConstructor[]) {
    @Component({})
    class Derived extends NestedEventDisplay {
      protected title = title;
      protected childrenEvents = children;
    }

    return Derived;
  }

  public render(h: CreateElement) {
    const prop = "_v";
    const title = ((this[prop as keyof this] as unknown) as Function)(
      this.title
    );
    return h("div", [
      title,
      [
        h(
          "sui-list-list",
          this.childrenEvents.map((c) => h("sui-list-item", [h(c)]))
        ),
      ],
    ]);
  }
}
