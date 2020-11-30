(function () {
  'use strict';

  var selector = {
    $button: document.querySelectorAll('.btn-next'),
    $items: document.querySelectorAll('.questionnaire'),
    count: 1
  };

  function start() {
    allHidden()
    selector.$items[0].show();

    selector.$button.forEach(item => {
      item.addEventListener('click', function (event) {
        nextItem()
      });
    })
  }

  function nextItem() {
    allHidden()
    selector.$items[selector.count].show()
    selector.count++
  }

  function allHidden() {
    selector.$items.forEach(item => {
      item.slideDown()
    })
  }

  start()
}());
