import Component from '@ember/component';
import layout from '../templates/components/auto-font-size';

export default Component.extend({
  layout,
  didRender: function() {
    var fontSize, maxHeight, ourText, textHeight;
    this._super(...arguments);
    this.element.style.setProperty('background-color', this.bgColor, 'important');
    if (this.bgColor === '#ffffff') {
      this.element.style.setProperty('color', 'black', 'important');
    }
    fontSize = Number(this.maxFontPixels || 999);
    ourText = this.element.children[0];
    maxHeight = this.element.offsetHeight;
    ourText.style.width = '100%';
    ourText.style.overflowWrap = 'break-word';
    while (true) {
      ourText.style.fontSize = `${fontSize}px`;
      textHeight = ourText.offsetHeight;
      fontSize = fontSize - 1;
      if ((textHeight < maxHeight) || fontSize <= 3) {
        break;
      }
    }
  }
});
