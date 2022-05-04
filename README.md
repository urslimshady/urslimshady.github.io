<html>

<head>

  <title>Habits | Weekly Planner</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
  <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js" integrity="sha256-xNjb53/rY+WmG+4L6tTl9m6PpqknWZvRt0rO1SRnJzw=" crossorigin="anonymous"></script>

</head>

<body onload="startTime()" onload="startTimeOne()" onload="startTimeTwo()" onload="startTimeThree" onload="startTimeFour()" onload="startTimeFive()" onload="startTimeSix()">

  <!-- CSS Nav Bar Begins -->

  <nav class="nav nav--active">

    <ul class="nav__list">

      <li class="nav__item">
        <a href="" class="nav__link">
          <div class="nav__thumb color1" data-letter="M"></div>
          <p class="nav__label">Monday</p>
        </a>
      </li>

      <li class="nav__item">
        <a href="" class="nav__link">
          <div class="nav__thumb color2" data-letter="T"></div>
          <p class="nav__label">Tuesday</p>
        </a>
      </li>

      <li class="nav__item">
        <a href="" class="nav__link">
          <div class="nav__thumb color3" data-letter="W"></div>
          <p class="nav__label">Wednesday</p>
        </a>
      </li>

      <li class="nav__item">
        <a href="" class="nav__link">
          <div class="nav__thumb color4" data-letter="Th"></div>
          <p class="nav__label">Thursday</p>
        </a>
      </li>

      <li class="nav__item">
        <a href="" class="nav__link">
          <div class="nav__thumb color5" data-letter="F"></div>
          <p class="nav__label">Friday</p>
        </a>
      </li>

      <li class="nav__item">
        <a href="" class="nav__link">
          <div class="nav__thumb color6" data-letter="Sa"></div>
          <p class="nav__label">Saturday</p>
        </a>
      </li>

      <li class="nav__item">
        <a href="" class="nav__link">
          <div class="nav__thumb color7" data-letter="Su"></div>
          <p class="nav__label">Sunday</p>
        </a>
      </li>

    </ul>

    <div class="burger burger--close">
      <div class="burger__patty"></div>
    </div>

  </nav>

  <!-- Nav Bar Ends -->
  <h1 id="current-time"></h1>
  </div>

  <div class="page" id="tabs">

   <section class="section section--active color1" data-letter="M">

      <article class="section__wrapper">

 
        <div>
          <h1 class="section__title" id="current-date" name="current-date"></h1>

          <h1 id="current-time"></h1>


        <script>
          var d = new Date();
          document.getElementById("current-date").innerHTML = d.toDateString();

          function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('current-time').innerHTML =
              h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 500);
          }

          function checkTime(i) {
            if (i < 10) {
              i = "0" + i
            };
            return i;
          }
        </script>

        <div class="Monday" id="Monday" class="tabcontent" name="Monday">
        <a href="/en/results?createnew=new">English</a> | <a href="/es/results?createnew=new">Spanish</a>
            <br><br><br><br><br>

          <input onclick="change()" type="button" class="addButton" value="&plus; new" id="add-todo" />
          <div class="to-do" id="to-do"><br><br>

            <h3 class="incompleted_goals">Incomplete</h3>
            <ul class="todo-list" id="todo-list">
            </ul>

          </div>

          <div class="completed" id="completed"><br><br>
            <h3 class="completed_goals">Complete</h3>
            <ul class="completed-list" id="completed-list">
            </ul>

            <h4 class="comment" id="Monday_comment"><br>Fresh start!</h4>
	    <a href="https://twitter.com/intent/tweet?button_hashtag=productive" class="twitter-hashtag-button">Tweet #productive</a>
            <script>
              ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                  p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                  js = d.createElement(s);
                  js.id = id;
                  js.src = p + '://platform.twitter.com/widgets.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }
              }(document, 'script', 'twitter-wjs');
            </script>
          </div>

          <div class="new-todo" id="new-todo" style="display:none;">
            <form>

              <p>
                <label for="task" required>WHAT TO DO:</label>
                <input type="text" class="task" name="task" id="task" required>
              </p>

              <p>
                <label id="Clock" for="time" required>WHEN:</label>
                <input type="time" class="time" name="time" id="time" required>
              </p>

            </form>

            <script>
              function change() {
                document.getElementById("add-todo").value = "+ more";
              }
            </script>

            <script>
              $(document).ready(function(e) {
                $('#add-todo').button({
                  icons: {
                    primary: "ui-icon-circle-plus"
                  }
                }).click(function() {
                  $('#new-todo').dialog('open');
                }); // end click .delay(5000).fadeout
                $('#new-todo').dialog({
                  modal: true,
                  autoOpen: false,
                  close: function() {
                    $('#new-todo input').val('');
                  },
                  buttons: {
                    "Add": function() {
                      var taskName = $('#task').val();
                      var dueDate = $('#due-date').val();
                      var time = $('#time').val();
                      var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
                      var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
                      var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
                      var endLi = '</li>';
                      $('#todo-list').prepend(beginLi + taskLi + time, +endLi);
                      $('#todo-list').hide().slideDown(250).find('li:first')
                        .animate({
                          'background-color': '#b3ffec',
                        }, 250)
                        .animate({
                          'background-color': '#d9b3ff'
                        }, 250).animate; // end animate
                      $(this).dialog('close');
                    },
                    "Nevermind": function() {
                      $(this).dialog('close');
                    }
                  }
                });
                $('#todo-list').on('click', '.done', function(e) {
                  var $taskItem = $(this).parent("li");
                  // fade in/fadeout 
                  var $copy = $taskItem.clone();
                  $('#completed-list').prepend($copy);
                  $copy.hide().slideDown();
                  $taskItem.remove();
                  $(".done").append("<div id='doneDialog'><br>You earn a pat on the back!</div>");
                }); // end on
                $('#todo-list, #completed-list').on('click', '.delete', function(e) {
                  $(this).parent("li").effect('puff', function() {
                    $(this).remove();
                  }); // end slideup
                }); // end on
                $('#todo-list').sortable();
              }); // end ready
            </script>
          </div>
        </div>
      </article>
    </section>

    <section class="section color2" data-letter="T">
      <article class="section__wrapper">
        <div>
          <h1 class="section__title" id="current-date1" name="current-date1"></h1>
          <!--     <h1 id="current-time1"></h1></div>
 -->
          <script>
            var d = new Date();
            document.getElementById("current-date1").innerHTML = d.toDateString();

            function startTimeOne() {
              var today = new Date();
              var h = today.getHours();
              var m = today.getMinutes();
              var s = today.getSeconds();
              m = checkTime(m);
              s = checkTime(s);
              document.getElementById('current-time1').innerHTML =
                h + ":" + m + ":" + s;
              var t = setTimeout(startTimeOne, 500);
            }

            function checkTime(i) {
              if (i < 10) {
                i = "0" + i
              };
              return i;
            }
          </script>

          <div class="Tuesday" id="Tuesday" class="tabcontent" name="Tuesday">
            <a href="/en/results?createnew=new">English</a> | <a href="/es/results?createnew=new">Spanish</a>
            <br><br><br><br><br>

            <input onclick="change()" type="button" class="addButton" value="&plus; new" id="add-todo1" />
            <div class="to-do" id="to-do1"><br><br>
              <h3 class="incompleted_goals">Incomplete:</h3>
              <ul class="todo-list" id="todo-list1">
              </ul>
            </div>

            <div class="completed" id="completed1"><br><br>
              <h3 class="completed_goals">Complete:</h3>
              <ul class="completed-list" id="completed-list1">
              </ul>
              <h4 class="comment" id="Tuesday_comment"><br>(You can make it through this week)</h4>
              <a href="https://twitter.com/intent/tweet?button_hashtag=tuesdaygoals" class="twitter-hashtag-button">Tweet #tuesdaygoals</a>

              <script>
                ! function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                  if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                  }
                }(document, 'script', 'twitter-wjs');
              </script>
            </div>
            <div class="new-todo" id="new-todo1" style="display:none;">
              <form>
                <p>
                  <label for="task" required>WHAT TO DO:</label>
                  <input type="text" class="task" name="task" id="task1" required>
                </p>
                <p>
                  <label id="Clock" for="time" required>WHEN:</label>
                  <input type="time" class="time" name="time" id="time1" required>
                </p>
              </form>
              <script>
                function change() {
                  document.getElementById("add-todo1").value = "+ more";
                }
              </script>

              <script>
                $(document).ready(function(e) {
                  $('#add-todo1').button({
                    icons: {
                      primary: "ui-icon-circle-plus"
                    }
                  }).click(function() {
                    $('#new-todo1').dialog('open');
                  }); // end click .delay(5000).fadeout
                  $('#new-todo1').dialog({
                    modal: true,
                    autoOpen: false,
                    close: function() {
                      $('#new-todo1 input').val('');
                    },
                    buttons: {
                      "Add": function() {
                        var taskName = $('#task1').val();
                        var dueDate = $('#due-date1').val();
                        var time = $('#time1').val();
                        var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
                        var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
                        var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
                        var endLi = '</li>';
                        $('#todo-list1').prepend(beginLi + taskLi + time, +endLi);
                        $('#todo-list1').hide().slideDown(250).find('li:first')
                          .animate({
                            'background-color': '#b3ffec',
                          }, 250)
                          .animate({
                            'background-color': '#ffd480'
                          }, 250).animate; // end animate
                        $(this).dialog('close');
                      },
                      "Nevermind": function() {
                        $(this).dialog('close');
                      }
                    }
                  });
                  $('#todo-list1').on('click', '.done', function(e) {
                    var $taskItem = $(this).parent("li");
                    // fade in/fadeout 
                    var $copy = $taskItem.clone();
                    $('#completed-list1').prepend($copy);
                    $copy.hide().slideDown();
                    $taskItem.remove();
                    $(".done").append("<div id='doneDialog1'><br>You earn a pat on the back!</div>");
                  }); // end on
                  $('#todo-list1, #completed-list1').on('click', '.delete', function(e) {
                    $(this).parent("li").effect('puff', function() {
                      $(this).remove();
                    }); // end slideup
                  }); // end on
                  $('#todo-list1').sortable();
                }); // end ready
              </script>
            </div>
          </div>

      </article>
    </section>

    <section class="section color3" data-letter="W">
      <article class="section__wrapper">
        <div>
          <h1 class="section__title" id="current-date2" name="current-date2"></h1>
          <h1 id="current-time2"></h1>
        </div>

        <script>
          var d = new Date();
          document.getElementById("current-date2").innerHTML = d.toDateString();

          function startTimeTwo() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('current-time2').innerHTML =
              h + ":" + m + ":" + s;
            var t = setTimeout(startTimeTwo, 500);
          }

          function checkTime(i) {
            if (i < 10) {
              i = "0" + i
            };
            return i;
          }
        </script>

        <div class="Wednesday" id="Wednesday" class="tabcontent" name="Wednesday">
          <a href="/en/results?createnew=new">English</a> | <a href="/es/results?createnew=new">Spanish</a>
          <br><br><br><br><br>
          <input onclick="change()" type="button" class="addButton" value="&plus; new" id="add-todo2" />
          <div class="to-do" id="to-do2"><br><br>
            <h3 class="incompleted_goals">Incomplete</h3>
            <ul class="todo-list" id="todo-list2">
            </ul>
          </div>

          <div class="completed" id="completed2"><br><br>
            <h3 class="completed_goals">Complete:</h3>
            <ul class="completed-list" id="completed-list2">
            </ul>
            <h4 class="comment" id="Wednesday_comment"><br>Halfway there</h4>
            <a href="https://twitter.com/intent/tweet?button_hashtag=goals" class="twitter-hashtag-button">Tweet #goals</a>
            <script>
              ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                  p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                  js = d.createElement(s);
                  js.id = id;
                  js.src = p + '://platform.twitter.com/widgets.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }
              }(document, 'script', 'twitter-wjs');
            </script>
          </div>
          <div class="new-todo" id="new-todo2" style="display:none;">
            <form>
              <p>
                <label for="task" required>WHAT TO DO:</label>
                <input type="text" class="task" name="task" id="task2" required>
              </p>
              <p>
                <label id="Clock" for="time" required>WHEN:</label>
                <input type="time" class="time" name="time" id="time2" required>
              </p>
            </form>
            <script>
              function change() {
                document.getElementById("add-todo2").value = "+ more";
              }
            </script>

            <script>
              $(document).ready(function(e) {
                $('#add-todo2').button({
                  icons: {
                    primary: "ui-icon-circle-plus"
                  }
                }).click(function() {
                  $('#new-todo2').dialog('open');
                }); // end click .delay(5000).fadeout
                $('#new-todo2').dialog({
                  modal: true,
                  autoOpen: false,
                  close: function() {
                    $('#new-todo2 input').val('');
                  },
                  buttons: {
                    "Add": function() {
                      var taskName = $('#task2').val();
                      var dueDate = $('#due-date2').val();
                      var time = $('#time2').val();
                      var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
                      var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
                      var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
                      var endLi = '</li>';
                      $('#todo-list2').prepend(beginLi + taskLi + time, +endLi);
                      $('#todo-list2').hide().slideDown(250).find('li:first')
                        .animate({
                          'background-color': '#b3ffec',
                        }, 250)
                        .animate({
                          'background-color': '#b3c6ff'
                        }, 250).animate; // end animate
                      $(this).dialog('close');
                    },
                    "Nevermind": function() {
                      $(this).dialog('close');
                    }
                  }
                });
                $('#todo-list2').on('click', '.done', function(e) {
                  var $taskItem = $(this).parent("li");
                  // fade in/fadeout 
                  var $copy = $taskItem.clone();
                  $('#completed-list2').prepend($copy);
                  $copy.hide().slideDown();
                  $taskItem.remove();
                  $(".done").append("<div id='doneDialog2'><br>&nbsp; You get a <br>gold star!</div>");
                }); // end on
                $('#todo-list2, #completed-list2').on('click', '.delete', function(e) {
                  $(this).parent("li").effect('puff', function() {
                    $(this).remove();
                  }); // end slideup
                }); // end on
                $('#todo-list2').sortable();
              }); // end ready
            </script>
          </div>
        </div>

      </article>
    </section>

    <section class="section color4" data-letter="Th">
      <article class="section__wrapper">

        <div>
          <h1 class="section__title" id="current-date3" name="current-date3"></h1>
          <h1 id="current-time3"></h1>
        </div>

        <script>
          var d = new Date();
          document.getElementById("current-date3").innerHTML = d.toDateString();

          function startTimeThree() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('current-time3').innerHTML =
              h + ":" + m + ":" + s;
            var t = setTimeout(startTimeThree, 500);
          }

          function checkTime(i) {
            if (i < 10) {
              i = "0" + i
            };
            return i;
          }
        </script>

        <div class="Thursday" id="Thursday" class="tabcontent" name="Thursday">
          <a href="/en/results?createnew=new">English</a> | <a href="/es/results?createnew=new">Spanish</a>
          <br><br><br><br><br>
          <input onclick="change()" type="button" class="addButton" value="&plus; new" id="add-todo3" />
          <div class="to-do" id="to-do3"><br><br>
            <h3 class="incompleted_goals">Incomplete:</h3>
            <ul class="todo-list" id="todo-list3">
            </ul>
          </div>

          <div class="completed" id="completed3"><br><br>
            <h3 class="completed_goals">Complete:</h3>
            <ul class="completed-list" id="completed-list3">
            </ul>
            <h4 class="comment" id="Wednesday_comment"><br>(Almost there...)</h4>
            <a href="https://twitter.com/intent/tweet?button_hashtag=fruitful" class="twitter-hashtag-button">Tweet #fruitful</a>
            <script>
              ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                  p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                  js = d.createElement(s);
                  js.id = id;
                  js.src = p + '://platform.twitter.com/widgets.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }
              }(document, 'script', 'twitter-wjs');
            </script>
          </div>
          <div class="new-todo" id="new-todo3" style="display:none;">
            <form>
              <p>
                <label for="task" required>WHAT TO DO:</label>
                <input type="text" class="task" name="task" id="task3" required>
              </p>
              <p>
                <label id="Clock" for="time" required>WHEN:</label>
                <input type="time" class="time" name="time" id="time3" required>
              </p>
            </form>
            <script>
              function change() {
                document.getElementById("add-todo3").value = "+ more";
              }
            </script>

            <script>
              $(document).ready(function(e) {
                $('#add-todo3').button({
                  icons: {
                    primary: "ui-icon-circle-plus"
                  }
                }).click(function() {
                  $('#new-todo3').dialog('open');
                }); // end click .delay(5000).fadeout
                $('#new-todo3').dialog({
                  modal: true,
                  autoOpen: false,
                  close: function() {
                    $('#new-todo3 input').val('');
                  },
                  buttons: {
                    "Add": function() {
                      var taskName = $('#task3').val();
                      var dueDate = $('#due-date3').val();
                      var time = $('#time3').val();
                      var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
                      var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
                      var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
                      var endLi = '</li>';
                      $('#todo-list3').prepend(beginLi + taskLi + time, +endLi);
                      $('#todo-list3').hide().slideDown(250).find('li:first')
                        .animate({
                          'background-color': '#b3ffec',
                        }, 250)
                        .animate({
                          'background-color': '#ff99c2'
                        }, 250).animate; // end animate
                      $(this).dialog('close');
                    },
                    "Nevermind": function() {
                      $(this).dialog('close');
                    }
                  }
                });
                $('#todo-list3').on('click', '.done', function(e) {
                  var $taskItem = $(this).parent("li");
                  // fade in/fadeout 
                  var $copy = $taskItem.clone();
                  $('#completed-list3').prepend($copy);
                  $copy.hide().slideDown();
                  $taskItem.remove();
                  $(".done").append("<div id='doneDialog3'><br>Great work!</div>");
                }); // end on
                $('#todo-list3, #completed-list3').on('click', '.delete', function(e) {
                  $(this).parent("li").effect('puff', function() {
                    $(this).remove();
                  }); // end slideup
                }); // end on
                $('#todo-list3').sortable();
              }); // end ready
            </script>
          </div>
        </div>

      </article>
    </section>

    <section class="section color5" data-letter="F">
      <article class="section__wrapper">
        <div>
          <h1 class="section__title" id="current-date4" name="current-date4"></h1>
          <h1 id="current-time4"></h1>
        </div>

        <script>
          var d = new Date();
          document.getElementById("current-date4").innerHTML = d.toDateString();

          function startTimeFour() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('current-time4').innerHTML =
              h + ":" + m + ":" + s;
            var t = setTimeout(startTimeFour, 500);
          }

          function checkTime(i) {
            if (i < 10) {
              i = "0" + i
            };
            return i;
          }
        </script>

        <div class="Friday" id="Friday" class="tabcontent" name="Friday">
          <a href="/en/results?createnew=new">English</a> | <a href="/es/results?createnew=new">Spanish</a>
          <br><br><br><br><br>
          <input onclick="change()" type="button" class="addButton" value="&plus; new" id="add-todo4" />
          <div class="to-do" id="to-do4"><br><br>
            <h3 class="incompleted_goals">Incomplete:</h3>
            <ul class="todo-list" id="todo-list4">
            </ul>
          </div>

          <div class="completed" id="completed4"><br><br>
            <h3 class="completed_goals">Complete:</h3>
            <ul class="completed-list" id="completed-list4">
            </ul>
            <h4 class="comment" id="Friday_comment"><br>(Finally!)</h4>

            <a href="https://twitter.com/intent/tweet?button_hashtag=finallyfriday" class="twitter-hashtag-button">Tweet #finallyfriday</a>
            <script>
              ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                  p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                  js = d.createElement(s);
                  js.id = id;
                  js.src = p + '://platform.twitter.com/widgets.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }
              }(document, 'script', 'twitter-wjs');
            </script>
          </div>
          <div class="new-todo" id="new-todo4" style="display:none;">
            <form>
              <p>
                <label for="task" required>WHAT TO DO:</label>
                <input type="text" class="task" name="task" id="task4" required>
              </p>
              <p>
                <label id="Clock" for="time" required>WHEN:</label>
                <input type="time" class="time" name="time" id="time4" required>
              </p>
            </form>
            <script>
              function change() {
                document.getElementById("add-todo4").value = "+ more";
              }
            </script>

            <script>
              $(document).ready(function(e) {
                $('#add-todo4').button({
                  icons: {
                    primary: "ui-icon-circle-plus"
                  }
                }).click(function() {
                  $('#new-todo4').dialog('open');
                }); // end click .delay(5000).fadeout
                $('#new-todo4').dialog({
                  modal: true,
                  autoOpen: false,
                  close: function() {
                    $('#new-todo4 input').val('');
                  },
                  buttons: {
                    "Add": function() {
                      var taskName = $('#task4').val();
                      var dueDate = $('#due-date4').val();
                      var time = $('#time4').val();
                      var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
                      var taskLi = '<span class="task" contenteditable> &nbsp;' + taskName + ' &nbsp; </span>';
                      var timeLi = '<span class="time" contenteditable>&nbsp;' + time + '&nbsp;</span>';
                      var endLi = '</li>';
                      $('#todo-list4').prepend(beginLi + taskLi + time, +endLi);
                      $('#todo-list4').hide().slideDown(250).find('li:first')
                        .animate({
                          'background-color': '#b3ffec',
                        }, 250)
                        .animate({
                          'background-color': '#bdc3c7'
                        }, 250).animate; // end animate
                      $(this).dialog('close');
                    },
                    "Nevermind": function() {
                      $(this).dialog('close');
                    }
                  }
                });
                $('#todo-list4').on('click', '.done', function(e) {
                  var $taskItem = $(this).parent("li");
                  // fade in/fadeout 
                  var $copy = $taskItem.clone();
                  $('#completed-list4').prepend($copy);
                  $copy.hide().slideDown();
                  $taskItem.remove();
                  $(".done").append("<div id='doneDialog4'><br>You earn a pat on the back!</div>");
                }); // end on
                $('#todo-list4, #completed-list4').on('click', '.delete', function(e) {
                  $(this).parent("li").effect('puff', function() {
                    $(this).remove();
                  }); // end slideup
                }); // end on
                $('#todo-list4').sortable();
              }); // end ready
            </script>
          </div>
        </div>

      </article>
    </section>

    <section class="section color6" data-letter="Sa">
      <article class="section__wrapper">
        <div>
          <h1 class="section__title" id="current-date5" name="current-date5"></h1>
          <h1 id="current-time5"></h1>
        </div>

        <script>
          var d = new Date();
          document.getElementById("current-date5").innerHTML = d.toDateString();

          function startTimeFive() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('current-time5').innerHTML =
              h + ":" + m + ":" + s;
            var t = setTimeout(startTimeFive, 500);
          }

          function checkTime(i) {
            if (i < 10) {
              i = "0" + i
            };
            return i;
          }
        </script>

        <div class="Saturday" id="Saturday5" class="tabcontent" name="Saturday">
          <a href="/en/results?createnew=new">English</a> | <a href="/es/results?createnew=new">Spanish</a>
          <br><br><br><br><br>
          <input onclick="change()" type="button" class="addButton" value="&plus; new" id="add-todo5" />
          <div class="to-do" id="to-do5"><br><br>
            <h3 class="incompleted_goals">Incomplete:</h3>
            <ul class="todo-list" id="todo-list5">
            </ul>
          </div>

          <div class="completed" id="completed5"><br><br>
            <h3 class="completed_goals">Complete:</h3>
            <ul class="completed-list" id="completed-list5">
            </ul>
            <h4 class="comment" id="Saturday_comment"><br>(Hopefully planning something fun...)</h4>
            <a href="https://twitter.com/intent/tweet?button_hashtag=fun" class="twitter-hashtag-button">Tweet #fun</a>
            <script>
              ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                  p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                  js = d.createElement(s);
                  js.id = id;
                  js.src = p + '://platform.twitter.com/widgets.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }
              }(document, 'script', 'twitter-wjs');
            </script>
          </div>
          <div class="new-todo" id="new-todo5" style="display:none;">
            <form>
              <p>
                <label for="task" required>WHAT TO DO:</label>
                <input type="text" class="task" name="task" id="task5" required>
              </p>
              <p>
                <label id="Clock" for="time" required>WHEN:</label>
                <input type="time" class="time" name="time" id="time5" required>
              </p>
            </form>
            <script>
              function change() {
                document.getElementById("add-todo5").value = "+ more";
              }
            </script>

            <script>
              $(document).ready(function(e) {
                $('#add-todo5').button({
                  icons: {
                    primary: "ui-icon-circle-plus"
                  }
                }).click(function() {
                  $('#new-todo5').dialog('open');
                }); // end click .delay(5000).fadeout
                $('#new-todo5').dialog({
                  modal: true,
                  autoOpen: false,
                  close: function() {
                    $('#new-todo5 input').val('');
                  },
                  buttons: {
                    "Add": function() {
                      var taskName = $('#task5').val();
                      var dueDate = $('#due-date5').val();
                      var time = $('#time5').val();
                      var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
                      var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
                      var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
                      var endLi = '</li>';
                      $('#todo-list5').prepend(beginLi + taskLi + time, +endLi);
                      $('#todo-list5').hide().slideDown(250).find('li:first')
                        .animate({
                          'background-color': '#b3ffec',
                        }, 250)
                        .animate({
                          'background-color': '#ffa280'
                        }, 250).animate; // end animate
                      $(this).dialog('close');
                    },
                    "Nevermind": function() {
                      $(this).dialog('close');
                    }
                  }
                });
                $('#todo-list5').on('click', '.done', function(e) {
                  var $taskItem = $(this).parent("li");
                  // fade in/fadeout 
                  var $copy = $taskItem.clone();
                  $('#completed-list5').prepend($copy);
                  $copy.hide().slideDown();
                  $taskItem.remove();
                  $(".done").append("<div id='doneDialog5'><br>You earn a pat on the back!</div>");
                }); // end on
                $('#todo-list5, #completed-list5').on('click', '.delete', function(e) {
                  $(this).parent("li").effect('puff', function() {
                    $(this).remove();
                  }); // end slideup
                }); // end on
                $('#todo-list5').sortable();
              }); // end ready
            </script>
          </div>
        </div>

      </article>
    </section>

    <section class="section color7" data-letter="Su">
      <article class="section__wrapper">
        <div>
          <h1 class="section__title" id="current-date6" name="current-date6"></h1>
          <h1 id="current-time6"></h1>
        </div>

        <script>
          var d = new Date();
          document.getElementById("current-date6").innerHTML = d.toDateString();

          function startTimeSix() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('current-time6').innerHTML =
              h + ":" + m + ":" + s;
            var t = setTimeout(startTimeSix, 500);
          }

          function checkTime(i) {
            if (i < 10) {
              i = "0" + i
            };
            return i;
          }
        </script>

        <div class="Sunday" id="Sunday6" class="tabcontent" name="Sunday">
          <a href="/en/results?createnew=new">English</a> | <a href="/es/results?createnew=new">Spanish</a>
          <br><br><br><br><br>
          <input onclick="change()" type="button" class="addButton" value="&plus; new" id="add-todo6" />
          <div class="to-do" id="to-do6"><br><br>
            <h3 class="incompleted_goals">Incomplete:</h3>
            <ul class="todo-list" id="todo-list6">
            </ul>
          </div>

          <div class="completed" id="completed6"><br><br>
            <h3 class="completed_goals">Complete:</h3>
            <ul class="completed-list" id="completed-list6">
            </ul>
            <h4 class="comment" id="Saturday_comment"><br>(Maybe relax for a bit?)</h4>
            <a href="https://twitter.com/intent/tweet?button_hashtag=relax" class="twitter-hashtag-button">Tweet #relax</a>
            <script>
              ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                  p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                  js = d.createElement(s);
                  js.id = id;
                  js.src = p + '://platform.twitter.com/widgets.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }
              }(document, 'script', 'twitter-wjs');
            </script>
          </div>
          <div class="new-todo" id="new-todo6" style="display:none;">
            <form>
              <p>
                <label for="task" required>WHAT TO DO:</label>
                <input type="text" class="task" name="task" id="task6" required>
              </p>
              <p>
                <label id="Clock" for="time" required>WHEN:</label>
                <input type="time" class="time" name="time" id="time6" required>
              </p>
            </form>
            <script>
              function change() {
                document.getElementById("add-todo6").value = "+ more";
              }
            </script>

            <script>
              $(document).ready(function(e) {
                $('#add-todo6').button({
                  icons: {
                    primary: "ui-icon-circle-plus"
                  }
                }).click(function() {
                  $('#new-todo6').dialog('open');
                }); // end click .delay(5000).fadeout
                $('#new-todo6').dialog({
                  modal: true,
                  autoOpen: false,
                  close: function() {
                    $('#new-todo6 input').val('');
                  },
                  buttons: {
                    "Add": function() {
                      var taskName = $('#task6').val();
                      var dueDate = $('#due-date6').val();
                      var time = $('#time6').val();
                      var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
                      var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
                      var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
                      var endLi = '</li>';
                      $('#todo-list6').prepend(beginLi + taskLi + time, +endLi);
                      $('#todo-list6').hide().slideDown(250).find('li:first')
                        .animate({
                          'background-color': '#ff99c2',
                        }, 250)
                        .animate({
                          'background-color': '#b3ffec'
                        }, 250).animate; // end animate
                      $(this).dialog('close');
                    },
                    "Nevermind": function() {
                      $(this).dialog('close');
                    }
                  }
                });
                $('#todo-list6').on('click', '.done', function(e) {
                  var $taskItem = $(this).parent("li");
                  // fade in/fadeout 
                  var $copy = $taskItem.clone();
                  $('#completed-list6').prepend($copy);
                  $copy.hide().slideDown();
                  $taskItem.remove();
                  $(".done").append("<div id='doneDialog6'><br>You earn a pat on the back!</div>");
                }); // end on
                $('#todo-list6, #completed-list6').on('click', '.delete', function(e) {
                  $(this).parent("li").effect('puff', function() {
                    $(this).remove();
                  }); // end slideup
                }); // end on
                $('#todo-list6').sortable();
              }); // end ready
            </script>
          </div>
        </div>

      </article>
    </section>

    </div>
</body>
<script>
  var Nav = (function() {
    var
      nav = $('.nav'),
      burger = $('.burger'),
      page = $('.page'),
      section = $('.section'),
      link = nav.find('.nav__link'),
      navH = nav.innerHeight(),
      isOpen = true,
      hasT = false;
    var toggleNav = function() {
      nav.toggleClass('nav--active');
      burger.toggleClass('burger--close');
      shiftPage();
    };
    var shiftPage = function() {
      if (!isOpen) {
        page.css({
          'transform': 'translateY(' + navH + 'px)',
          '-webkit-transform': 'translateY(' + navH + 'px)'
        });
        isOpen = true;
      } else {
        page.css({
          'transform': 'none',
          '-webkit-transform': 'none'
        });
        isOpen = false;
      }
    };
    var switchPage = function(e) {
      var self = $(this);
      var i = self.parents('.nav__item').index();
      var s = section.eq(i);
      var a = $('section.section--active');
      var t = $(e.target);
      if (!hasT) {
        if (i == a.index()) {
          return false;
        }
        a
          .addClass('section--hidden')
          .removeClass('section--active');
        s.addClass('section--active');
        hasT = true;
        a.on('transitionend webkitTransitionend', function() {
          $(this).removeClass('section--hidden');
          hasT = false;
          a.off('transitionend webkitTransitionend');
        });
      }
      return false;
    };
    var keyNav = function(e) {
      var a = $('section.section--active');
      var aNext = a.next();
      var aPrev = a.prev();
      var i = a.index();
      if (!hasT) {
        if (e.keyCode === 37) {
          if (aPrev.length === 0) {
            aPrev = section.last();
          }
          hasT = true;
          aPrev.addClass('section--active');
          a
            .addClass('section--hidden')
            .removeClass('section--active');
          a.on('transitionend webkitTransitionend', function() {
            a.removeClass('section--hidden');
            hasT = false;
            a.off('transitionend webkitTransitionend');
          });
        } else if (e.keyCode === 39) {
          if (aNext.length === 0) {
            aNext = section.eq(0)
          }
          aNext.addClass('section--active');
          a
            .addClass('section--hidden')
            .removeClass('section--active');
          hasT = true;
          aNext.on('transitionend webkitTransitionend', function() {
            a.removeClass('section--hidden');
            hasT = false;
            aNext.off('transitionend webkitTransitionend');
          });
        } else {
          return
        }
      }
    };
    var bindActions = function() {
      burger.on('click', toggleNav);
      link.on('click', switchPage);
      $(document).on('ready', function() {
        page.css({
          'transform': 'translateY(' + navH + 'px)',
          '-webkit-transform': 'translateY(' + navH + 'px)'
        });
      });
      $('body').on('keydown', keyNav);
    };
    var init = function() {
      bindActions();
    };
    return {
      init: init
    };
  }());
  Nav.init();
</script>
