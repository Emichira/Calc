//business logic
var pingpong = function(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0 & i % 5 === 0) {
      $("ul#output").append("<li class='remove'> pingpong</li>");
    } else if (i % 3 === 0) {
      $("ul#output").append("<li class='remove'>ping</li>");
    } else if (i % 5 === 0) {
      $("ul#output").append("<li class='remove'>pong</li>");
    } else {
      $("ul#output").append("<li class='remove'>" + String(i) + "</li>");
    }
  };
};


//user interface logic
$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    $("li.remove").remove();
    var number = parseInt($("input#pingpong").val());
    pingpong(number)
  });
});
