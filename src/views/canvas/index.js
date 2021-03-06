import $ from 'jquery';
import Drawer from '../../drawer';
import eventEmitter from '../../services/eventEmitter';

function Canvas() {
  this.template = require('./index.html');
  $("#app-container").html(this.template)
}

Canvas.prototype = {
  init: function() {
    const self = this;
    eventEmitter.on('post', function(data) {
      self.showText(data)
    })
  },

  showText: function(postData) {
    const drawer = new Drawer();
    drawer.drawText(postData.message, postData.speed)
  }
}

export default Canvas;
