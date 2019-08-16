import Component from '@ember/component';
import layout from '../templates/components/auto-font-size';

export default Component.extend({
  layout,
  didRender: function() {
    var fontSize, maxHeight, ourText;
    this._super(...arguments);
    this.element.style.setProperty('background-color', this.bgColor, 'important');
    if (this.bgColor === '#ffffff') {
      this.element.style.setProperty('color', 'black', 'important');
    }
    maxHeight = this.element.offsetHeight;
    fontSize = Number(this.maxFontPixels || maxHeight);
    ourText = this.element.children[0];
    ourText.style.width = '100%';
    ourText.style.overflowWrap = 'break-word';
    var minFS = 3, maxFS = fontSize;
    while (fontSize != minFS) {
      ourText.style.fontSize = `${fontSize}px`;
      if (ourText.offsetHeight < maxHeight) {
        minFS = fontSize;
      } else{
        maxFS = fontSize;
      }
      fontSize = Math.floor((minFS + maxFS)/2);
    }
    ourText.style.fontSize = `${minFS}px`;
  }
});
