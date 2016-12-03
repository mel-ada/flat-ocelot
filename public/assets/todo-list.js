$(document).ready(function () {

  $('form').on('submit', function () {

      var item = $('form input');
      var todo = { item: item.val() };

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function (data) {
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

    });

  $('li').on('click', function () {
      var item = $(this).text().replace(/ /g, '-');
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function (data) {
          //do something with the data via front-end framework
          location.reload();
        }
      });
    });

// function1 listening on `edit` click -  unhides the edit item form,
// and hides the add item form

//function 2 which is exactly like function on line 22, which will
// use UPDATE as the type, and it will extract the itemPos using splice(),
// and also send across the `new item` to update

});
