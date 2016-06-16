var choice;
var heightInput;
$(function() {
  $("#animalForm").submit(function(event) {
    event.preventDefault();
    choice = parseInt($("select").val());
    if (choice === 1) {
      window.open("https://simple.wikipedia.org/wiki/Snake", "_blank");
    } else if (choice === 2) {
      window.open("https://simple.wikipedia.org/wiki/Insect", "_blank");
    } else {
      window.open("https://simple.wikipedia.org/wiki/Turtle", "_blank");
    }
  });
  $("#heightForm").submit(function(event) {
    event.preventDefault();
    $(".children").hide();
    $(".teen").hide();
    $(".adult").hide();
    heightInput=$("input:radio[name=height]:checked").val();
    if (heightInput === "short") {
      $(".children").show();
    } else if (heightInput === "medium") {
      $(".teen").show();
    } else {
      $(".teen").show();
      $(".adult").show();
    }
  });

});
