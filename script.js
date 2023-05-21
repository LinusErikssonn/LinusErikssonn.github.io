$("#Hem").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("main").offset().top - 200,
    },
    1000
  );
});

$("#Bilder").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("main").offset().top - 100,
    },
    1000
  );
});

$("#produkter").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#ruta3").offset().top - 200,
    },
    1000
  );
});

$("#kampanjer").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#ruta2").offset().top - 200,
    },
    1000
  );
});

$("#kontakt").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("footer").offset().top,
    },
    1000
  );
});
