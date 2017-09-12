$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("button#neutral").click(function() {
    $("body").removeClass();
  });

  $(".highlightable").click(function() {
    $(".highlightable").addClass("highlight");
  });
});
