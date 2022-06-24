import { CreateElement } from "vue/types/umd";
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class DefaultEventDisplay extends Vue {
  protected title: string = "";

  public static create(title: string) {
    @Component({})
    class Derived extends DefaultEventDisplay {
      protected title = title;
    }

    return Derived;
  }

  public render(h: CreateElement) {
    const prop = "_v";
    return ((this[prop as keyof this] as unknown) as Function)(this.title);
  }
}
