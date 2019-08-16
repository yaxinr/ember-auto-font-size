import Component from '@ember/component';
import layout from '../templates/components/auto-font-size';

export default Component.extend({
  layout,
  didRender: function() {
    var fontSize, maxHeight, el, textHeight;
    this._super(...arguments);
    el = this.element;
    el.style.setProperty('background-color', this.bgColor, 'important');
    if (this.bgColor === '#ffffff') {
      el.style.setProperty('color', 'black', 'important');
    }
    fontSize = Number(this.maxFontPixels || 999);
    maxHeight = el.parentElement.offsetHeight;
    el.style.width = '100%';
    el.style.overflowWrap = 'break-word';
    while (true) {
      el.style.fontSize = `${fontSize}px`;
      textHeight = el.offsetHeight;
      fontSize = fontSize - 1;
      if ((textHeight < maxHeight) || fontSize <= 3) {
        break;
      }
    }
  }
});
