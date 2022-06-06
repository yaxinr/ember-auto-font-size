import Component from "@ember/component";
import layout from "../templates/components/auto-font-size";
import { setFontSize } from "./auto-font-size";
export default Component.extend({
  layout,
  didRender: function () {
    this._super(...arguments);
    setFontSize(this.element, this.bgColor, this.maxFontPixels);
  },
});
