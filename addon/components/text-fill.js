import Component from '@ember/component';
import layout from '../templates/components/auto-font-size';

export default Component.extend({
  layout,
  didRender: function() {
    var fontSize, maxHeight, maxWidth, textElement, parentElement;
    this._super(...arguments);
    textElement = this.element;
    parentElement = textElement.parentElement;
    parentElement.style.setProperty('background-color', this.bgColor, 'important');
    if (this.bgColor === '#ffffff') {
      parentElement.style.setProperty('color', 'black', 'important');
    }
    maxHeight = parentElement.clientHeight;
    maxWidth = parentElement.clientWidth;
    fontSize = Number(this.maxFontPixels || maxHeight);
    var minFS = 3, maxFS = fontSize;
    while (fontSize != minFS) {
      textElement.style.fontSize = `${fontSize}px`;
      if (textElement.offsetHeight < maxHeight && textElement.offsetWidth <= maxWidth) {
        minFS = fontSize;
      } else{
        maxFS = fontSize;
      }
      fontSize = Math.floor((minFS + maxFS)/2);
    }
    textElement.style.fontSize = `${minFS}px`;
  }
});
