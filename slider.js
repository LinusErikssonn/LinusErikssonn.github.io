window.onload = $("#radio2").prop("checked", true);

var px = 2664;

$("#right").show();
$("#left").show();
$("#radiobox").show();

$("#right").click(function () {
  px += 1332;
  check();
  $("#images").animate(
    {
      right: "+=1332",
    },
    1500,
    function () {
      if (px > 3996) {
        px -= 3996;
        check();
        $("#images").css("right", "-=3996px");
      }

      console.log(px);
    }
  );
});

$("#left").click(function () {
  px -= 1332;
  check();

  $("#images").animate(
    {
      right: "-=1332",
    },
    1500,
    function () {
      if (px < 1332) {
        px += 3996;
        check();
        $("#images").css("right", "+=3996px");
      }

      console.log(px);
    }
  );
});

$("#radio1").click(function () {
  if (px == 2664) {
    $("#images").animate(
      {
        right: "1332",
      },
      1000,
      function () {
        px = 1332;
      }
    );
  }
  if (px == 3996) {
    $("#images").animate(
      {
        right: "1332",
      },
      2000,
      function () {
        px = 1332;
      }
    );
  }
});

$("#radio2").click(function () {
  $("#images").animate(
    {
      right: "2664",
    },
    1000,
    function () {
      px = 2664;
    }
  );
});

$("#radio3").click(function () {
  if (px == 1332) {
    $("#images").animate(
      {
        right: "3996",
      },
      2000,
      function () {
        px = 3996;
      }
    );
  }

  if (px == 2664) {
    $("#images").animate(
      {
        right: "3996",
      },
      1000,
      function () {
        px = 3996;
      }
    );
  }
});

function check() {
  if (px == 1332) {
    $("#radio1").prop("checked", true);
  }
  if (px == 2664) {
    $("#radio2").prop("checked", true);
  }
  if (px == 3996) {
    $("#radio3").prop("checked", true);
  }
}
