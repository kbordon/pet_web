$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });
  $("button#neutral").click(function() {
    $("body").removeClass();
  });

  $(".highlightable").click(function() {
    if($(this).hasClass("highlight"))
    {
      $(this).removeClass("highlight");
    }
    else
    {
      $(".highlight").removeClass("highlight");
      $(this).addClass("highlight");
    }
  });
});
