(function(){
  'use strict';

  $(document).ready(function(){
    $('#controls > button').click(addColor);
  });

  function addColor(){
    var color  = $('#controls > input').val(),
        $color = $('<div>');

    $color.addClass('color');
    $color.css('background-color', color);
    $('#colors').append($color);
  }
})();

