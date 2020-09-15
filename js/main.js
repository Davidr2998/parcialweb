var objeto1 = document.getElementById("bg");
var objeto2 = document.getElementById("spider");
var images = ["spiderman", "thor", "hulk", "ironman"];
var windowWidth = $(window).width();

var randomFunction = window.setInterval(randomIMG, 5000);

$(objeto1).mousemove(function (event) {
  let moveX = ($(window).width() - event.pageX) * 0.035;
  $(objeto2).css("margin-left", moveX + "px");

  let moveY = ($(window).height() - event.pageY) * 0.055;
  $(objeto2).css("margin-top", moveY + "px");
});

function randomIMG() {
  const random = Math.floor(Math.random() * images.length);
  let path = "../resources/" + images[random] + ".png";
  console.log(path);
  objeto2.src = path;
}
