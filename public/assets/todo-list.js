$(document).ready(function () {

  $('#add-item-form').on('submit', function () {

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

  $(".edit-link").on('click', function(e) {
    $("#add-item-form").hide();
    $("#edit-item-form").show();
    var itemValue = $(this).closest('.todo-item').find('li').html();
    $("#edit-item-textbox").val(itemValue);
    console.log();
  });

  $("#cancel-edit-button").on('click', function(e) {
    $("#add-item-form").show();
    $("#edit-item-form").hide();
    e.preventDefault();
  });

  $('#edit-item-form').on('submit', function () {

      var item = $('#edit-item-form input');
      var todo = { item: item.val() };
      var todoIndex = window.location.href.split('#')[1].split('/')[1];
      console.log('todo::', todo)
      $.ajax({
        type: 'PUT',
        url: '/todo/' + todoIndex,
        data: todo,
        success: function (data) {
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

    });

// steps
// 1. on page load, hide edit form by setting the display property to none DONE
// 2. when a user clicks on an edit link, we hide the `add item` form,
// and show the `edit item` form. We also want to populate the textbox
// with the value of the todo



// function1 listening on `edit` click -  unhides the edit item form,
// and hides the add item form

//function 2 which is exactly like function on line 22, which will
// use UPDATE as the type, and it will extract the itemPos using splice(),
// and also send across the `new item` to update

});
