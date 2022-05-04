$(document).ready(function() {
  var numberOfTasks = 0;

  $("#add").on("click", addItem);
  $("#tasklist").on("click", ".d", deleteItem);
  $("#donelist").on("click", ".d", deleteItem);
  $("#clearAll").on("click", clearAll);
  $("#tasklist").on("click", ".checkbox", checkItem);
  $("#tasklist").sortable();
  $("#donelist").sortable();

  $(document).keypress(function(e) {
    if (e.which == 13) {
      addItem();
    }
  });

  function addItem() {
    var randomColor = 0;
    var text = $("#task").val();
    if (text === "") {
      alert("You cannot add an empty task");
    } else if (text === "snake") {
      window.location.href = "snake.html";
    } else {
      var textNoSpace = Math.random()
        .toString(36)
        .substring(7);
      numberOfTasks = numberOfTasks + 1;

      //To change the text which tells how many tasks are left

      tasksLeft();

      //This has to do with the item being added on

      $("#tasklist").append(
        '<li><div class="listItem"><p><input type ="checkbox" id="' +
          textNoSpace +
          'check" class = "checkbox" /> <label for="' +
          textNoSpace +
          'check"></label>' +
          text +
          '<button class="d md-button" id="' +
          textNoSpace +
          '">Delete</button></div></li>'
      );

      do {
        var randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      } while (randomColor < 100000);

      $("#" + textNoSpace).css("background-color", randomColor);
      $("#task").val("");
    }
  }

  function tasksLeft() {
    document.title = "To-Do (" + numberOfTasks + ")";

    if (numberOfTasks > 1) {
      $("#tasksleft").show();
      document.getElementById("tasksleft").innerHTML =
        "You have " + numberOfTasks + " tasks to complete.";
    } else if (numberOfTasks > 0 && numberOfTasks < 2) {
      $("#tasksleft").show();
      document.getElementById("tasksleft").innerHTML =
        "You have " + numberOfTasks + " task to complete.";
    } else {
      document.getElementById("tasksleft").innerHTML =
        "You have no tasks left!";
    }
  }

  function deleteItem() {
    $(this)
      .parent()
      .fadeOut(700);
    if (
      $(this)
        .parent()
        .hasClass("complete")
    ) {
    } else {
      numberOfTasks = numberOfTasks - 1;
    }
    tasksLeft();
  }

  function clearAll() {
    $(".complete")
      .parent()
      .fadeOut(700);
    tasksLeft();
  }

  function checkItem() {
    $(this)
      .parent()
      .addClass("complete");
    numberOfTasks = numberOfTasks - 1;
    tasksLeft();
    $("#donelist").append($(this).parent());
  }
});


var nav__label = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var text = "";
var i;

for (i = 0; i < nav__label.length; i++) {
  text += nav__label[i];
}

