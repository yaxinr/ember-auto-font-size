import Component from "@ember/component";
import layout from "../templates/components/auto-font-size";
import { debug } from "@ember/debug";
export default Component.extend({
  layout,
  didRender: function () {
    this._super(...arguments);
    const textElement = this.element.children[0];
    setFontSize(textElement, this.bgColor, this.maxFontPixels);
  },
});
export function setFontSize(textElement, bgColor, maxFontPixels) {
  const parentElement = textElement.parentElement;
  parentElement.style.setProperty("background-color", bgColor, "important");
  if (bgColor === "#ffffff") {
    parentElement.style.setProperty("color", "black", "important");
  }
  const parentClientHeight = parentElement.clientHeight;
  const parentClientWidth = parentElement.clientWidth;
  textElement.style.padding = "unset";
  textElement.style.margin = "auto";
  debug(
    `parentElement: maxHeight=${parentClientHeight} maxWidth=${parentClientWidth}`
  );
  let fontSize = Number(maxFontPixels || parentClientHeight);
  var minFS = 3,
    maxFS = fontSize;
  debug(`fontSize=${fontSize} minFS=${minFS} minFS=${maxFS}`);
  while (fontSize != minFS) {
    textElement.style.fontSize = `${fontSize}px`;
    debug(
      `textElement: scrollHeight=${parentElement.scrollHeight} scrollWidth=${parentElement.scrollWidth}`
    );
    if (
      parentElement.scrollHeight <= parentClientHeight &&
      parentElement.scrollWidth <= parentClientWidth
    ) {
      minFS = fontSize;
    } else {
      maxFS = fontSize;
    }
    fontSize = Math.floor((minFS + maxFS) / 2);
    debug(`fontSize=${fontSize} minFS=${minFS} minFS=${maxFS}`);
  }
  textElement.style.fontSize = `${minFS}px`;
  debug(`textElement.style.fontSize = ${minFS}px`);
}
