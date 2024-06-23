$("#menu_open").click(function () {
  if ($(".mobile-menu__list").width() === 0) {
    $(".mobile-menu__list").animate({
      width: "90%",
      height: "300",
      opacity: "100",
    });
    $("#menu_open > path").css("fill", "hsla(0, 0%, 100%, 0.75)");
  } else {
    $(".mobile-menu__list").animate({ width: "0%", height: "0", opacity: "0" });
    $("#menu_open > path").css("fill", "hsl(0, 0%, 100%)");
  }
});
