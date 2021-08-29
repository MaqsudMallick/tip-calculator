//Data
var bill = 0;
var noOfPeople = 0;
var tip = 0;

// Button Toggling
var flag1 = 0,
  flag2 = 0,
  customflag = 0;
$(document).on("click", function (e) {
  $(".text-box").removeClass("clicked");
  flag1 = 0;
  flag2 = 0;
  customflag = 0;
});

$(".text-box-1").on("click", function (e) {
  $(".text-box-2").removeClass("clicked");
  $(this).toggleClass("clicked");
  flag1 = 1;
  flag2 = 0;
  customflag = 0;
  e.stopPropagation();
  calculate();
});

$(".text-box-2").on("click", function (e) {
  $(this).removeClass("warning-border");
  $(".warning").css("visibility", "hidden");
  $(".text-box-1").removeClass("clicked");
  $(this).toggleClass("clicked");
  flag2 = 1;
  flag1 = 0;
  customflag = 0;
  e.stopPropagation();
  calculate();
});

//Data Entry

$(document).keydown(function (e) {
  if (flag1 == 1 && bill <= 999999999999999) {
    if (
      e.key == 0 ||
      e.key == 1 ||
      e.key == 2 ||
      e.key == 3 ||
      e.key == 4 ||
      e.key == 5 ||
      e.key == 6 ||
      e.key == 7 ||
      e.key == 8 ||
      e.key == 9
    )
      bill = Number(Number(bill) * 10 + Number(e.key));

    $("span.data-1").text(Math.floor(bill));
    calculate();
  }
  if (flag2 == 1 && noOfPeople <= 999999999999999) {
    if (
      e.key == 0 ||
      e.key == 1 ||
      e.key == 2 ||
      e.key == 3 ||
      e.key == 4 ||
      e.key == 5 ||
      e.key == 6 ||
      e.key == 7 ||
      e.key == 8 ||
      e.key == 9
    )
      noOfPeople = Number(Number(noOfPeople) * 10 + Number(e.key));

    $("span.data-2").text(Math.floor(noOfPeople));
    calculate();
  }
  if (customflag == 1 && tip < 100) {
    console.log("hi");
    if (
      e.key == 0 ||
      e.key == 1 ||
      e.key == 2 ||
      e.key == 3 ||
      e.key == 4 ||
      e.key == 5 ||
      e.key == 6 ||
      e.key == 7 ||
      e.key == 8 ||
      e.key == 9
    )
      tip = Number(Number(tip) * 10 + Number(e.key));
    $(".custom").text(Math.floor(tip));
    calculate();
  }
});

// Toggle between multiple buttons
$(".btn-dark").on("click", function (e) {
  $(".text-box").removeClass("clicked");
  flag1 = 0;
  flag2 = 0;
  $(".btn-dark").removeClass("pressed");
  $(this).addClass("pressed");
  tip = $(this).text();
  if (tip == "Custom") {
    inputCustom();
    e.stopPropagation();
    calculate();
  }
});

function inputCustom() {
  tip = 0;
  customflag = 1;
  $(".custom").text("0").css("color", "white");
}

function calculate() {
  if (noOfPeople != 0) {
    $(".warning").css("visibility", "hidden");
    $(".text-box-2").removeClass("warning-border");
    switch (tip) {
      case "5%":
      case "10%":
      case "15%":
      case "20%":
      case "25%":
        tip = Number(tip.slice(0, tip.length - 1));
    }
    var tipAmount = (tip * bill) / 100;
    var total = bill - tipAmount;
    $(".tip-Amount").text(tipAmount / noOfPeople);
    $(".total").text(total / noOfPeople);
  } else {
    $(".warning").css("visibility", "visible");
    $(".text-box-2").addClass("warning-border");
  }
}

//Reset Button
$(".reset").click(function (e) {
  location.reload();
  e.stopPropagation();
});
