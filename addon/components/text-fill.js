import Component from '@ember/component';
import layout from '../templates/components/auto-font-size';

export default Component.extend({
  layout,
  didRender: function() {
    var fontSize, maxHeight, el;
    this._super(...arguments);
    el = this.element;
    el.style.setProperty('background-color', this.bgColor, 'important');
    if (this.bgColor === '#ffffff') {
      el.style.setProperty('color', 'black', 'important');
    }
    maxHeight = el.parentElement.offsetHeight;
    fontSize = Number(this.maxFontPixels || maxHeight);
    el.style.width = '100%';
    el.style.overflowWrap = 'break-word';
    var minFS = 3, maxFS = fontSize;
    while (fontSize != minFS) {
      el.style.fontSize = `${fontSize}px`;
      if (el.offsetHeight < maxHeight) {
        minFS = fontSize;
      } else{
        maxFS = fontSize;
      }
      fontSize = Math.floor((minFS + maxFS)/2);
    }
    el.style.fontSize = `${minFS}px`;
  }
});
