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
      }
    });

    this.on('click', '.item-text', function () {
      $(event.target).toggleClass('done');
    });

    this.on('click', '.item-remove', function () {
      $(event.target).parent().remove();
    });

    return this;
  };
})(jQuery);


$(document).ready(function() {
  const $list = $(".list");

  $list.todolist();
})