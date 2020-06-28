const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

(function ($) {
  
  $.fn.todolist = function () {
    const $input = $("#add-input");
    const $add = $("#add-submit");
    const _this = this;

    $add.on('click', function (event) {
      event.preventDefault();
      let $newTask = $input.val();
      if ($newTask.length === 0) {
        $input.addClass('required');
      } else {
        const $li =
          '<li class="item"><span class="item-text">' +
          $newTask +
          '</span><button class="item-remove">Remove</button></li>';
        _this.append($li);
        $input.removeClass('required');
        $input.val('');
        updateTasksSummary(_this);
      }
    });

    this.on('click', '.item-text', function () {
      $(event.target).toggleClass('done');
      updateTasksSummary(_this);
    });

    this.on('click', '.item-remove', function () {
      $(event.target).parent().remove();
      updateTasksSummary(_this);
    });

    return this;
  };
})(jQuery);


$(document).ready(function() {
  const $list = $(".list");
  updateTasksSummary($list);
  $list.todolist();
})


const amountDoneTask = function(list) {
  let done = 0;
  for (let i = 0; i < list.children().length; i++) {
    if (list.children().eq(i).find('span').hasClass('done')) {
      done++;
    } 
  }

  return done;
}

const updateTasksSummary = function(list) {
  $('.amount .done').text(amountDoneTask(list));
  $('.amount .in-progress').text(list.children().length - amountDoneTask(list))
  $('.amount span').last().text(list.children().length);
}
