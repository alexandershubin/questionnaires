(function () {
  'use strict';

  var selector = {
    $button: document.querySelectorAll('.btn-next'),
    $items: document.querySelectorAll('.questionnaire'),
    count: 1
  };

  function start() {
    allHidden()
    changeDisplay(selector.$items[0], 'flex');

    selector.$button.forEach(item => {
      item.addEventListener('click', function (event) {
        nextItem()
      });
    })
  }

  function changeDisplay($node, value) {
    $node.style.display = value;
    return $node;
  }

  function nextItem() {
    allHidden()
    changeDisplay(selector.$items[selector.count], 'flex')
    selector.count++
  }

  function allHidden() {
    selector.$items.forEach(item => {
      changeDisplay(item, 'none');
    })
  }

  start()
}());
