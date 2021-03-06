import './index.css'
import $ from 'jquery';
import databaseService from '../../services/db';
import throttle from 'lodash/throttle';

function PostPage() {
  this.template = require('./index.html');
  this.inputText = '';
}

PostPage.prototype = {
  render: function() {
    $('#app-container').html(this.template)
    $('#text-input').on('keyup', (e) => {
      this.inputText = e.currentTarget.value;
    })
    window.addEventListener('devicemotion', (e) => {
      if (e.acceleration.x < 5) return
        const ajustedText = this.inputText.trim();
        if (ajustedText === '') return

      throttle(postData, 2000);

      function postData() {
        databaseService.post(ajustedText, 'x', e.acceleration.x);
        $('#text-input').val('');
      }
    })
  }
}
export default PostPage;
