$(document).ready(function() {
  var view1 = $(".plus-button1");
  var isOpen1 = false;

  view1.click(function() {
    var detail1 = $("#desche");

    if (isOpen1 === false) {
      detail1.show();
      view1.text(" - ");
      isOpen1 = true;
    } else {
      detail1.hide();
      view1.text("+");
      isOpen1 = false;
    }
  });

  var view2 = $(".plus-button2");
  var isOpen2 = false;

  view2.click(function() {
    var detail2 = $("#detime");

    if (isOpen2 === false) {
      detail2.show();
      view2.text(" - ");
      isOpen2 = true;
    } else {
      detail2.hide();
      view2.text("+");
      isOpen2 = false;
    }
  });

  var view3 = $(".plus-button3");
  var isOpen3 = false;

  view3.click(function() {
    var detail3 = $("#stpoint");

    if (isOpen3 === false) {
      detail3.show();
      view3.text(" - ");
      isOpen3 = true;
    } else {
      detail3.hide();
      view3.text("+");
      isOpen3 = false;
    }
  });

  var view4 = $(".plus-button4");
  var isOpen4 = false;

  view4.click(function() {
    var detail4 = $("#traper");

    if (isOpen4 === false) {
      detail4.show();
      view4.text(" - ");
      isOpen4 = true;
    } else {
      detail4.hide();
      view4.text("+");
      isOpen4 = false;
    }
  });

  var view5 = $(".plus-button5");
  var isOpen5 = false;

  view5.click(function() {
    var detail5 = $("#trabudget");

    if (isOpen5 === false) {
      detail5.show();
      view5.text(" - ");
      isOpen5 = true;
    } else {
      detail5.hide();
      view5.text("+");
      isOpen5 = false;
    }
  });

  var view6 = $(".plus-button6");
  var isOpen6 = false;

  view6.click(function() {
    var detail6 = $("#trans");

    if (isOpen6 === false) {
      detail6.show();
      view6.text(" - ");
      isOpen6 = true;
    } else {
      detail6.hide();
      view6.text("+");
      isOpen6 = false;
    }
  });

  var view7 = $(".plus-button7");
  var isOpen7 = false;

  view7.click(function() {
    var detail7 = $("#profea");

    if (isOpen7 === false) {
      detail7.show();
      view7.text(" - ");
      isOpen7 = true;
    } else {
      detail7.hide();
      view7.text("+");
      isOpen7 = false;
    }
  });

  var view8 = $(".plus-button8");
  var isOpen8 = false;

  view8.click(function() {
    var detail8 = $("#prom");

    if (isOpen8 === false) {
      detail8.show();
      view8.text(" - ");
      isOpen8 = true;
    } else {
      detail8.hide();
      view8.text("+");
      isOpen8 = false;
    }
  });

  var view9 = $(".plus-button9");
  var isOpen9 = false;

  view9.click(function() {
    var detail9 = $("#tramem");

    if (isOpen9 === false) {
      detail9.show();
      view9.text(" - ");
      isOpen9 = true;
    } else {
      detail9.hide();
      view9.text("+");
      isOpen9 = false;
    }
  });
});
